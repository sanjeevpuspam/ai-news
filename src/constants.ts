const API_KEY = "219d9291667e38c07ba7aaf37087a9d9";
export const BASE_URL = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}`;

export const CATEGORIES:any = [
  { label: "प्रमुख", value: "general" },
  { label: "विश्व", value: "world" },
  { label: "राष्ट्रीय", value: "nation" },
  { label: "मनोरंजन", value: "entertainment" },
  { label: "खेल", value: "sports" },
  { label: "स्वास्थ्य", value: "health" },
  { label: "विज्ञान", value: "science" },
  { label: "व्यापार", value: "business" },
  { label: "तकनीकी", value: "technology" },
];

export const LANGUAGES:any = [
    { label: "हिंदी", value: "hi" },
    { label: "English", value: "en" },
];

export const COUNTRIES:any = [
  { label: "India", value: "in", label_hindi: 'भारत'  },
  { label: "Pakistan", value: "pk", label_hindi: 'पाकिस्तान' },
  { label: "China", value: "cn", label_hindi:  'चीन' },
]

export const SORT_BY:any = [
  { label: "Published", value: "publishedAt", label_hindi: "प्रकाशित" },
  { label: "Relevance", value: "relevance", label_hindi: "प्रासंगिकता"},
]

export const DEFAULT_CONTENT: any = {
    language: LANGUAGES[0].value,
    country : COUNTRIES[0].value,
    searchString: "none",
    topic: CATEGORIES[0].value,
    sortBy: SORT_BY[0].value,
    none: 'None',
    max: 10,
    page: 1
}

export const COMPONENT_VARIANT = "soft";

export const SEARCH_NEWS:any = {
  en: 'Search News',
  hi: 'समाचार खोजें' 
}

export const CALENDER_TEXT:any = {
  en: {
    to: 'To',
    from: 'From',
    cancel: 'Cancel',
    ok: 'Ok',
    clear: 'Clear',
    today: 'Today',
    datePicker: 'Select date',
    timePicker: 'Select tIme',
    dateTimePicker: 'Select date and time',
    previousMonth : 'Last Month',
    nextMonth : 'Next month'
  },
  hi : {
    to: 'तक',
    from: 'से',
    cancel: 'रद्द करें',
    ok: 'ठीक है',
    clear: 'साफ़ करें',
    today: 'आज',
    datePicker: 'तारीख़ चुनें',
    timePicker: 'समय चुनें',
    dateTimePicker: 'तारीख़ और समय चुनें',
    previousMonth : 'पिछला महीना',
    nextMonth : 'अगला महीना'
  }
}