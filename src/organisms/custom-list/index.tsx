import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Videocam from '@mui/icons-material/Videocam';
import Image from '@mui/icons-material/Image';

import React from "react";
import { CATEGORIES } from '../../constants';

const CustomList = ({language, topic, setTopic})=> {

    return CATEGORIES?.length > 0 && <List component="nav">
        {CATEGORIES?.map((cat:any)=>{
            return <ListItemButton
                key={cat.value} 
                className='text-capitalize'>
                        <ListItemDecorator>
                        <Image />
                    </ListItemDecorator>
                     {cat.label}
                </ListItemButton>
        })}
    </List>
}

export default CustomList;


// {CATEGORIES?.map((cat:any) => <CustomButton 
//                     key={cat.value} 
//                     isDisabled={topic === cat?.value}
//                     customClass="rounded-full border text-capitalize"
//                     label={cat.label}
//                     type="topic"
//                     value={cat?.value}
//                     language={language}
//                     setAction={setTopic}
//                 />
//             )}
//             </ButtonGroup>