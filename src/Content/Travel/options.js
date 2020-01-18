import airport_clt from "../../Images/Travel/airport_clt.jpg";
import airport_avl from "../../Images/Travel/airport_avl.jpg";
import airport_atl from "../../Images/Travel/airport_atl.jpg";
import airport_gsp from "../../Images/Travel/airport_gsp.jpg";

export const options = [
  {
    location: "Atlanta, GA",
    airport: "Hartsfield-Jackson Atlanta International (ATL)",
    drive: "2h 30min",
    miles: "139 miles",
    image: airport_atl,
    rentalCars:
      "http://apps.atl.com/Passenger/GroundTransportation/Default.aspx?Acc=rcc",
    googleMaps:
      "https://www.google.com/maps/dir/ATL+airport,+North+Terminal+Parkway,+Atlanta,+GA/Highlands,+NC/@34.3458034,-84.2950932,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88f4fd2fe1035901:0x4117a3ef1892b048!2m2!1d-84.4277001!2d33.6407282!1m5!1m1!1s0x88591e43b7493627:0x7a4520f9a0c172d6!2m2!1d-83.1968173!2d35.0525909!3e0"
  },
  {
    location: "Charlotte, NC",
    airport: "Charlotte Douglas International (CLT)",
    drive: "3h 10min",
    miles: "159 miles",
    image: airport_clt,
    rentalCars: "https://www.cltairport.com/to-and-from/rental-cars",
    googleMaps:
      "https://www.google.com/maps/dir/Charlotte+Douglas+Airport+(US+Air+Terminal),+Charlotte,+NC/Highlands,+NC/@35.0474891,-82.6322528,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88569880aa46b997:0x98087530a7be1deb!2m2!1d-80.943078!2d35.221117!1m5!1m1!1s0x88591e43b7493627:0x7a4520f9a0c172d6!2m2!1d-83.1968173!2d35.0525909!3e0"
  },
  {
    location: "Greenvile, SC",
    airport: "Greenville-Spartanburg International (GSP)",
    drive: "2h",
    miles: "82 miles",
    image: airport_gsp,
    rentalCars: "https://www.gspairport.com/hire-ground-transportation/",
    googleMaps:
      "https://www.google.com/maps/dir/Greenville-Spartanburg+International+Airport,+GSP+Drive,+Greer,+SC/Highlands,+NC/@34.9004668,-82.9898603,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88582a0a39cbf875:0x4d9cda4b48e8eb19!2m2!1d-82.2172338!2d34.8959008!1m5!1m1!1s0x88591e43b7493627:0x7a4520f9a0c172d6!2m2!1d-83.1968173!2d35.0525909!3e0"
  },
  {
    location: "Asheville, NC",
    airport: "Asheville Regional Airport (AVL)",
    drive: "1h 30min",
    miles: "57 miles",
    image: airport_avl,
    rentalCars:
      "https://flyavl.com/passenger-services/parking-transportation/rental-cars",
    googleMaps:
      "https://www.google.com/maps/dir/Asheville+Regional+Airport,+Terminal+Drive+%231,+Fletcher,+NC/Highlands,+NC/@35.2324181,-83.161735,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8859ecbd4fbaf423:0x9a75498c5b42908b!2m2!1d-82.5378541!2d35.4348962!1m5!1m1!1s0x88591e43b7493627:0x7a4520f9a0c172d6!2m2!1d-83.1968173!2d35.0525909!3e0"
  }
];
