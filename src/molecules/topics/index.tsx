import React from "react";
import { CATEGORIES } from "../../constants";
import CustomButton from "../custom-button";


const TopicGroup = ({language, topic, setTopic, loading }:any) => {
    return( CATEGORIES?.length>0 && <div className="d-flex flex-fill justify-content-center">
            {CATEGORIES?.map((cat:any) => <CustomButton 
                    key={cat.value} 
                    isDisabled={topic === cat?.value}
                    customClass="flex-fill text-capitalize"
                    label={cat.label}
                    type="topic"
                    value={cat?.value}
                    language={language}
                    setAction={setTopic}
                    loading={topic === cat?.value && loading}
                />
            )}
            </div>
    )  
}
export default TopicGroup;
