import React from "react";
import { AspectRatio, Card, CardContent, CardOverflow,  Divider, Typography } from "@mui/joy";
import CustomButton from "../custom-button";
import TimeWithIcon from "../../organisms/post-time";


const NewsCard = ({data, setOpen, setNews, language}:any)=>{

    const handleNews = (news:any) => {
      setNews(news);
      setOpen(true);
    };

    return (data?.length > 0 && data.map((d:any,i:number) => {
            const imgUrl = d?.image ?? 'https://via.placeholder.com/300x180';
            const title = d?.title ?? '';
            const desc =  d.description ?? '';
            
           return <div key={d.url} className="col-xxl-3 col-lg-4 col-md-6 col-12 my-2">
                    <Card variant="outlined"
                        sx={{
                            '&:hover': { 
                                boxShadow: 'md', 
                                borderColor: 'neutral.outlinedHoverBorder' 
                            }
                        }}
                        >
                        <CardOverflow>
                            <AspectRatio>
                                <img src={imgUrl} srcSet={imgUrl} alt={title} loading="lazy" />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">{title}</Typography>
                            <Divider inset="context" />
                        </CardContent>
                        <CardContent orientation="horizontal" className="justify-content-between">
                            <TimeWithIcon isFull={false} isoTime={d.publishedAt} />
                            <CustomButton nameOnly={false} label={d.source.name} href={d.source.url} type="external" language={language} />
                        </CardContent>
                        <CardContent>
                            <Divider inset="context" />
                            <Typography>{desc}</Typography>
                        </CardContent>
                        <CardOverflow variant="soft">
                            <CustomButton label="Read More" type="readMore" language={language} setAction={()=>handleNews(d)} />
                        </CardOverflow>
                        </Card>
                </div> }))
}

export default NewsCard;
