import React  from "react";
import { DEFAULT_CONTENT, LANGUAGES } from "../../constants";
import { Button  } from '@mui/joy';

import LanguageIcon from '@mui/icons-material/Language';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const LanguagesControl = ({language, setLanguage}:any) =>{

    return (LANGUAGES?.length > 0 &&
        <div className="d-flex">
            {LANGUAGES?.map((l:any) =>{
                return <Button
                    key={l.value}
                    onClick={() => setLanguage(l.value)}
                    disabled={l.value===language}
                    variant={language===l.value ? "soft" : "plain"}
                    startDecorator={l.value != DEFAULT_CONTENT.language ? <LanguageIcon /> : <GTranslateIcon />}>
                        {l.label}
                </Button>
            })}
        </div>
  );
}

export default LanguagesControl;
