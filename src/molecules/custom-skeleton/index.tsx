import { AspectRatio, Card, Link, Skeleton, Typography } from "@mui/joy"
import React, { useEffect, useState } from "react"


export const NewsSkeleton = ({num=5}) => {
    const [count, setCount] = useState([] as any);

    useEffect(()=>{
         const loop: any[] = [];
        for (let i = 1; i <= num; i++) {
            const obj = {
                id: i
            }
            loop.push(obj);
        }
        setCount(loop);
    },[num]);

    return count?.map(({id}:any)=> <div key={id} className="col-xxl-3 col-lg-4 col-md-6 col-12 my-2">
                <Card>
                <AspectRatio ratio="21/12">
                    <Skeleton variant="overlay">
                    <img
                        alt=""
                        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    />
                    </Skeleton>
                </AspectRatio>
                <Typography level="h1">
                    <Skeleton>Lorem ipsum is</Skeleton>
                </Typography>
                <Typography>
                    <Skeleton>
                    Lorem ipsum is placeholder text commonly used in the graphic, 
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    Lorem ipsum is placeholder text commonly used in the graphic,    
                    </Skeleton>
                </Typography>
                <div className="d-flex flex-row justify-content-around">
                    <Link><Skeleton>Source Link 1</Skeleton></Link>
                    <Link><Skeleton>Source Link 1</Skeleton></Link>
            </div>
        </Card>
    </div>)
}