/*
TODO: Create single date manipulation util
? Isolates the year from a date string
*/
export const getYear = (dateString:string) => {
  const date = new Date(dateString);
  return date.getFullYear();
}
