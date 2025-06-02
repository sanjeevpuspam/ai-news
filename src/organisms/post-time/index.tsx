import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box,  Typography } from "@mui/joy";
import { getPublishedAge, toIndianDateTime } from "../../utils";

const TimeWithIcon = ({isoTime, fullDate}: { isoTime: string, fullDate:boolean | undefined}) => {
  const localTime = fullDate ? toIndianDateTime(isoTime) :  getPublishedAge(isoTime);

  return (
    <Box display="flex" alignItems="center" gap={1}> 
      <AccessTimeIcon fontSize="medium" />
      <Typography level="body-xs" color="neutral">
        {localTime}
      </Typography>
    </Box>
  );
};

export default TimeWithIcon;