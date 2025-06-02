import React from "react";
import { Button } from "@mui/joy";
import OpenInNew from "@mui/icons-material/OpenInNew";
import RefreshIcon from '@mui/icons-material/Refresh';
import {COMPONENT_VARIANT, LANGUAGES as lan } from "../../constants";

type ButtonProps = {
  type: string;
  language?: string;
  label?: string;
  value?: string;
  topic?: string;
  key?: string;
  setAction? : any;
  isDisabled?: boolean;
  customClass?: string;
  nameOnly?: boolean; 
  href?: string;
  loading?:boolean;
};

const CustomButton = (props : ButtonProps)=>{
    const {key, label, value, isDisabled, customClass, type, language, setAction, nameOnly, href, loading } = props;

    const ButtonType = (type:string) => {
        switch (type) {
            case 'topic':
                return <Button 
                        key={key} 
                        loading={loading}
                        loadingPosition="end"
                        variant={COMPONENT_VARIANT} 
                        disabled={isDisabled} 
                        className={customClass} 
                        onClick={() => setAction(value)}
                    >
                            {language === lan[0].value ? label : value }
                        </Button>
            case 'refresh':
                return <Button loading={loading} variant={COMPONENT_VARIANT} onClick={setAction}>
                        <RefreshIcon />
                     </Button>
            case 'readMore':
                return <Button variant={COMPONENT_VARIANT} onClick={setAction}>{label}</Button>;
            case 'external':
                return <Button
                    variant={nameOnly ? COMPONENT_VARIANT :"plain" }
                    endDecorator={<OpenInNew />}
                    component="a"
                    href={href}
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {label}
                </Button>
            default:
                return <Button variant={COMPONENT_VARIANT}>{label}</Button>
        }
    }

    return ButtonType(type);
}

export default CustomButton;