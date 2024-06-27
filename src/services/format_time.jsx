export const formatTime = (date) => {
  if (!(date instanceof Date)) return "";
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes; // add leading zero if needed
  return `${hours}:${minutes} ${ampm}`;
};
