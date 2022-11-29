const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getDateStr(date) {
  if(date==null) return null;
  const fmtdate = new Date(`${date}`);
  const dateStr =
    monthNames[fmtdate.getMonth()] +
    " " +
    fmtdate.getDate() +
    ", " +
    fmtdate.getFullYear();
  return dateStr;
}

const dateToTime = date => {
  let fmtdate  =  new Date(`${date}`).toLocaleString('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName:'short'
});
//if( fmtdate.includes(" PM") ) fmtdate =fmtdate.replace(" PM", "pm")
//if( fmtdate.includes(" AM") ) fmtdate =fmtdate.replace(" AM", "am")
return fmtdate
}

export function getEventDateStr(date, endDate=null) {
  let fmtdate = dateToTime(date)
 
  if(endDate!==null){
    let [startTime, startAMPM, startTimeZone] = fmtdate.split(" ")
    let [endTime, endAMPM, endTimeZone]= dateToTime(endDate).split(" ")
    fmtdate =`${startTime}–${endTime} ${endAMPM} ${endTimeZone}`
  }
  return `${getDateStr(date)} at ${fmtdate}`;
}

export function isDateAfterNow(date) {
  const eventDate = new Date(`${date}`)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate());
  tomorrow.setHours(0, 0, 0, 0);
  return eventDate > tomorrow;
}

export function getContentUrl(contentType, slug) {
  const contentMap = {
    Insight: "/insights",
    "Case Study": "/case-studies",
    Toolkit: "/toolkits",
    "Working at Nava": "/working-at-nava",
    News: "/news",
    Events:"/events",
    "Public Benefit Report":""
  };
  const contentPart = contentMap[contentType];
  return `${contentPart}/${slug}`;
}

// Ensures that the id is a stand alone field and maps collections to a list of items
export function liftData(data) {
  if (!data) return data;

  let newData = data;
  if ("sys" in data && "id" in data["sys"]) {
    newData = {
      id: data.sys.id,
      ...data,
    };
  }
  // For Article Post List component
  for (let key in data) {
    if (key.includes("Collection")) {
      newData = {
        ...newData,
        items: data[key].items.map((item) => liftData(item)),
      };
    }
    // Use `key` and `value`
  }
  return newData;
}
// Slugify for turning tags into urls
export function slugify(text) {
  return text
    .toString() // Cast to string (optional)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export function capitalize(str) {
  if (str == null || str == "") {
    return str;
  }

  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
