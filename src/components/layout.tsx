import React, { useEffect, useState } from "react";
import { BASE_URL, COUNTRIES, DEFAULT_CONTENT, SORT_BY } from "../constants";

import TopicGroup from "../molecules/topics";
import LanguagesControl from "../molecules/languages-control";
import { data } from "./data";
import NewsCard from "../molecules/news-card";
import SearchWrapper from "../molecules/search-wrapper";
import { NewsSkeleton } from "../molecules/custom-skeleton";
import CustomSelectOption from "../molecules/custom-select";
import OneCalendarDateTimeRangePicker from "../molecules/custom-calendar";
import SingleNews from "../molecules/single-news";
import CustomButton from "../molecules/custom-button";

const max = DEFAULT_CONTENT.max;
const page = DEFAULT_CONTENT.page;

export default function Layout() {
     
    const [isLoading, setIsLoading] = useState(true as boolean);
    const [open, setOpen] = useState(false as boolean);
    const [news, setNews] = useState({} as any);
    const [articles, setArticles] = useState([] as any);
    const [topic, setTopic] = useState(DEFAULT_CONTENT.topic as string);
    const [language, setLanguage] = useState(DEFAULT_CONTENT.language as string);
    const [country, setCountry] = useState(DEFAULT_CONTENT.country as string);
    const [sortBy, setSortBy] = useState(DEFAULT_CONTENT.sortBy as string);
    const [searchString, setSearchString] = useState(DEFAULT_CONTENT.searchString as string);
    const [formDate, setFormDate] = useState(DEFAULT_CONTENT.none as string);
    const [toDate, setToDate] = useState(DEFAULT_CONTENT.none as string);

    
    const fetchNews = async (topic:string, lan: string, country:string, searchStr:string, sortBy: string) => {
        setIsLoading(true);
        try {
            const params = new URLSearchParams({
                q: searchStr,
                in : 'title,description,content',
                lang: lan,
                country: country,
                topic: topic,
                sortby: sortBy,
                from: formDate,
                to: toDate,
                page: "1",
                max: "10"
            });
            const url = `${BASE_URL}&${params.toString()}`;
            const res = await fetch(url);
            const data = await res.json();
            setArticles(data?.articles || []);
            setIsLoading(false);
            // setTimeout(()=>{
            //     setArticles(data[0].articles ?? []);
            //     setIsLoading(false);
            // },1000);
            } catch (error) {
                console.error("News fetching failed:", error);
            }
    }

    const refreshHandle = () => fetchNews(topic, language, country, searchString, sortBy);

    useEffect(() => {
        setArticles([]);
        fetchNews(topic, language, country, searchString, sortBy);
    },[topic, language, country, searchString, sortBy]);

  return (
    <div className="container">
        <header className="row d-flex justify-content-center mt-3 mb-2">
            Header
        </header>
        <div className="row mt-3 mb-2 d-flex justify-content-between">
            <div className="col-md-11 d-flex justify-content-start">
                <TopicGroup language={language}  topic={topic} setTopic={setTopic} loading={isLoading} />
            </div>
            <div className="col-md-1 d-flex justify-content-end">
                <CustomButton loading={isLoading} type="refresh" setAction={refreshHandle} />
            </div>
        </div>
        <div className="row mt-3 mb-2">
            <div className="col-md-2">
                <LanguagesControl language={language} setLanguage={setLanguage} />
            </div>
            <div className="col-md-2">
                <CustomSelectOption language={language} setMethod={setCountry} data={COUNTRIES} defaultValue={DEFAULT_CONTENT.country} />
            </div>
            <div className="col-md-2">
                <CustomSelectOption language={language} setMethod={setSortBy} data={SORT_BY} defaultValue={DEFAULT_CONTENT.sortBy} />
            </div>
            
            <div className="col-md-4">
                <OneCalendarDateTimeRangePicker language={language} setFormDate={setFormDate} setToDate={setToDate} />
            </div>
            <div className="col-md-2">
                <SearchWrapper language={language} setSearchString={setSearchString} />
            </div>
        </div>
        <div className="row mt-3 mb-2">
            {isLoading && <NewsSkeleton num={10} />}
            <NewsCard data={articles} setOpen={setOpen} setNews={setNews} />
            {open && <SingleNews language={language} open={open} setOpen={setOpen} news={news} setNews={setNews} />}
        </div>
        {/* <footer className="row mt-3 mb-2">
            <div className="col-3">
                List 1
            </div>
            <div className="col-3">
                <CustomList language={language}  topic={topic} setTopic={setTopic} />
            </div>
            <div className="col-3">
                List 3
            </div>
            <div className="col-3">
                List 4
            </div>
        </footer> */}
    </div>
  );
}