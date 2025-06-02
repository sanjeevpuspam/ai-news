import React, { useEffect } from "react";
import { Button, DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";

import CustomButton from "../custom-button";
import TimeWithIcon from "../../organisms/post-time";

const SingleNews = ({open, news, setOpen, setNews, language}:any) => {
    const imgUrl = news?.image ?? 'https://via.placeholder.com/300x180';
    const title = news?.title ?? '';
    const desc =  news.description ?? '';
    const content =  news.content ?? '';

    useEffect(()=>{
        !open && setNews({});
    },[open]);

    return open && <Modal aria-labelledby={title} aria-describedby={desc} open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
        <ModalDialog variant="soft">
            <ModalClose variant="soft" sx={{ m: 1 }} />
            <DialogTitle>{title ?? ""}</DialogTitle>
            <Divider />
            <Typography component="div" className="d-flex gap-2">
                <TimeWithIcon isoTime={news.publishedAt} /> 
                <CustomButton nameOnly={false} label={news.source.name} href={news.source.url} type="external" language={language} />
            </Typography>
            <DialogContent>
                <Typography component="p">{desc}</Typography>
                    <img src={imgUrl} srcSet={imgUrl} alt={title} loading="lazy" />
                <Typography component="p">{content}</Typography>
            </DialogContent>
             <DialogActions>
                <CustomButton nameOnly={true} label={news.source.name} href={news.source.url} type="external" language={language} />
                <Button variant="plain" color="neutral" onClick={() => setOpen(false)}> Cancel </Button>
            </DialogActions>
        </ModalDialog>
      </Modal>
}
export default SingleNews;
