import venue from "../../Images/venue.PNG";
import lakehouse from "../../Images/lakehouse.jpeg";
import wineShoppe from "../../Images/wine_shoppe.png";

export const details = [
  {
    title: "Lake Day",
    content: `Come join us for a day at Lake Keowee on your way to Highlands.
      There will be plenty of food and hopefully sunshine. We will be
      serving lunch around 1:00pm. The lake house is a 2.5 hour drive from
      Charlotte and 1 hour drive from Highlands.`,
    image: lakehouse,
    details: {
      header: "Manning Family Lake House",
      date: "Thursday, September 23",
      time: "11:00am - 5:00pm",
      location: "1999 Hampton Shores Drive | Seneca, SC 29672",
      notes: "Bring your swim suits and BYOB",
    },
  },
  {
    title: "Welcome Party",
    content: `As a welcome to Highlands, please join us at Highlands Wine Shoppe
      located in town and within walking distance from your hotels. For
      those that need to drive, there is plenty of public parking along
      Main Street.`,
    image: wineShoppe,
    details: {
      header: "Highlands Wine Shoppe",
      date: "Friday, September 24",
      time: "7:00pm - 10:00pm",
      location: "269 Oak St | Highlands, NC 28741",
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
      time: "Ceremony 5:00pm",
      location: "447 South St | Highlands, NC 28741",
      notes: "Cocktail attire",
    },
  },
];
