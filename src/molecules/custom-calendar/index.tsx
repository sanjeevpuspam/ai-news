import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/hi';
import 'dayjs/locale/en';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
dayjs.extend(utc);

import { CALENDER_TEXT } from '../../constants';



export default function OneCalendarDateTimeRangePicker({language, setFormDate, setToDate}:any) {
  
  const [startDateTime, setStartDateTime] = useState(null as null | Dayjs);
  const [endDateTime, setEndDateTime] = useState(null as null | Dayjs);
  const [localeText, setLocaleText] = useState({} as any);

  useEffect(()=>{
    language && dayjs.locale(language);
    language && setLocaleText({
      cancelButtonLabel: CALENDER_TEXT[language].cancel,
      okButtonLabel: CALENDER_TEXT[language].ok,
      clearButtonLabel: CALENDER_TEXT[language].clear,
      todayButtonLabel: CALENDER_TEXT[language].today,
      datePickerToolbarTitle: CALENDER_TEXT[language].datePicker,
      timePickerToolbarTitle: CALENDER_TEXT[language].timePicker,
      dateTimePickerToolbarTitle: CALENDER_TEXT[language].dateTimePicker,
      previousMonth: CALENDER_TEXT[language].previousMonth,
      nextMonth: CALENDER_TEXT[language].nextMonth,
    });
  },[language]);

  return (
    <LocalizationProvider adapterLocale={language} localeText={localeText} dateAdapter={AdapterDayjs}>
      <div className="d-flex gap-1">
        <DateTimePicker
          value={startDateTime}
          onChange={setStartDateTime}
          maxDateTime={dayjs()}
          label={!startDateTime && CALENDER_TEXT[language].from}
          slotProps={{
            textField: { 
              fullWidth: true,
              variant: "standard",
              size: 'small',
            }
          }}
          
          onClose={() => {
            if (startDateTime) {
              const utcString = dayjs(startDateTime).utc().format();
              setFormDate(utcString);
            }
          }}
        />
        <DateTimePicker
          value={endDateTime}
          label={!endDateTime && CALENDER_TEXT[language].to}
          onChange={setEndDateTime}
          maxDateTime={dayjs()}
          minDateTime={startDateTime as any}
          slotProps={{
            textField: { 
              fullWidth: true,
              variant: "standard",
              size: 'small'
            },
          }}
          onClose={() => {
            if (endDateTime) {
              const utcString = dayjs(endDateTime).utc().format();
              setToDate(utcString);
            }
          }}
        />
      </div>
    </LocalizationProvider>
  );
}

