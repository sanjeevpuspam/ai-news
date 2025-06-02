import React from "react";
import { COMPONENT_VARIANT, LANGUAGES as lan } from "../../constants";
import { Select, Option } from "@mui/joy";

const CustomSelectOption = ({language, data, setMethod, defaultValue}:any) =>{

    return data?.length > 0 && <Select 
        defaultValue={defaultValue}
        onChange={(e:any)=> setMethod(e.target.value) }
        variant={COMPONENT_VARIANT}
        >
        {data?.map((c:any)=>{
            return(<Option key={c.value} value={c.value}>
                    {language === lan[0].value ? c.label_hindi : c.label }
                </Option>)
        })}
    </Select>
}

export default CustomSelectOption;