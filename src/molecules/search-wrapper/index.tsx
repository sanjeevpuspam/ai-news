import React, { useState } from "react";
import { IconButton, Input } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import { COMPONENT_VARIANT, SEARCH_NEWS } from "../../constants";



const SearchWrapper = ({language, setSearchString}:any) => {
        const [search, setSearch] = useState("" as string);
        const handleSearchClick = ()=> {
           search?.length >=3 && setSearchString(search);
        } 
        
    return <Input 
            placeholder={SEARCH_NEWS[language]}
            variant={COMPONENT_VARIANT} 
            onChange={(e:any)=> setSearch(e.target.value)}
            value={search}
            endDecorator={
                 <IconButton
                    variant="soft"
                    onClick={handleSearchClick}>
                    <SearchIcon />
                </IconButton>
            }
        />
}

export default SearchWrapper;