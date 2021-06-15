import venue from "../../Images/venue.PNG";
import lakehouse from "../../Images/lakehouse.jpeg";
import playhouse from "../../Images/playhouse.jpg";

export const details = [
  {
    title: "Welcome Party",
    content: `As a welcome to Highlands, please join us at Highlands Playhouse
      located in town and within walking distance from your hotels. For
      those that need to drive, there is plenty of public parking along
      Main and Oak Street.`,
    image: playhouse,
    details: {
      header: "Highlands Playhouse",
      date: "Friday, September 24",
      time: "6:00pm - 9:00pm",
      location: "362 Oak St | Highlands, NC 28741",
      notes: "Dressy casual attire",
    },
  },
  {
    title: "Wedding",
    content: `We are very excited to share our special day with you! The Ceremony
      and Reception will be outside on the Piermont Cottage lawn. If
      you’re staying in town, we recommend walking to the Piermont
      Cottage. If you plan to drive, parking is available in the office
      building lot at the corner of 5th and South St.`,
    image: venue,
    details: {
      header: "Piermont Cottage",
      date: "Saturday, September 25",
      time: "Ceremony 5:30pm",
      location: "447 South St | Highlands, NC 28741",
      notes: "Cocktail attire",
    },
  },
  {
    title: "Lake Day",
    content: `Join us for a day at Lake Keowee on your way home from Highlands.
      There will be plenty of food and hopefully sunshine. We will be
      serving lunch around 1:00pm. The lake house is a 2.5 hour drive from
      Charlotte and 1 hour drive from Highlands.`,
    image: lakehouse,
    details: {
      header: "Manning Family Lake House",
      date: "Sunday, September 26",
      time: "11:00am - 5:00pm",
      location: "1999 Hampton Shores Drive | Seneca, SC 29672",
      notes: "Bring your swim suits and BYOB",
    },
  }
];
