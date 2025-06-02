

export const getPublishedAge = (dateString:string) => {
  const publishedDate:any = new Date(dateString);
  const now:any = new Date();
  const diffMs = now - publishedDate;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);
  const months  = Math.floor(days / 30);
  const years   = Math.floor(months / 12);

  if(years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  if(months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if(days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if(hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if(minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return `Just now`;
}

export const toIndianDateTime = (dateString:string) => {
  const date = new Date(dateString);
  const options:any = {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  return new Intl.DateTimeFormat('en-IN', options).format(date);
}