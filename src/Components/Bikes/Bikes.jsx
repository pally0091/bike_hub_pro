/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import Bike from "./Bike";
const Bikes = () => {
  const bikes = [
    {
      id: 1,
      bikeName: "Honda",
      model: "CBR600RR",
      details: "A powerful sportbike known for its agility and performance.",
      image:
        "https://images.hindustantimes.com/auto/img/2020/08/25/1600x900/2021-honda-cbr600rr-launch-august-21-video-1_1596709217738_1596709252030_1598348297849.jpg",
      spc: "599cc inline-four, 118 hp, race-inspired sportbike design, agile handling, adjustable suspension, versatile for track and street riding.",
      price: 1250000,
    },
    {
      id: 2,
      bikeName: "Kawasaki",
      model: "Ninja 1000",
      details: "A sport-touring bike with a blend of speed and comfort.",
      image:
        "https://content2.kawasaki.com/ContentStorage/KMC/ProductTopFeature/1146/469045ee-6dc6-4d41-9fc7-b343ce267f38.jpg?w=800",
      spc: "1,043cc inline-four, 140 hp, sport-touring motorcycle with comfortable riding position, advanced electronics, and integrated saddlebags for touring convenience.",
      price: 1219000,
    },
    {
      id: 3,
      bikeName: "Harley-Davidson",
      model: "Iron 883",
      details: "A classic cruiser bike with a rugged and iconic design.",
      image:
        "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-f57/360/2022-iron-883-f57-motorcycle-08.jpg?impolicy=myresize&rw=1600",
      spc: "883cc V-twin, 50 hp, classic cruiser design, blacked-out components, customizable, comfortable for city cruising.",
      price: 872000,
    },
    {
      id: 4,
      bikeName: "BMW",
      model: "S1000RR",
      details: "A high-performance superbike built for the racetrack.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbocEX21to9RS-LxI1oAnQ7jK6xHiZrbkyVQ&usqp=CAU",
      spc: "999cc inline-four, 205 hp, aggressive sportbike styling, advanced electronics with riding modes, premium components for top-notch performance, and available M package for track enhancements.",
      price: 2050000,
    },
    {
      id: 5,
      bikeName: "Ducati",
      model: "Monster 821",
      details: "A naked bike with a perfect balance of power and style.",
      image:
        "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20180430033209_2018-Ducati-Monster-821.jpg&w=700&q=90&c=1",
      spc: "821cc Testastretta L-twin, 109 hp, iconic naked bike design, agile handling, Ducati Safety Pack with ABS and traction control, comfortable for daily rides.",
      price: 1600000,
    },
    {
      id: 6,
      bikeName: "Triumph",
      model: "Street Triple R",
      details:
        "A streetfighter motorcycle with impressive agility and handling.",
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/octane/UIL2OE5J2NNLPWOFN3KNCCSHDY.jpg",
      spc: "765cc inline-three, 116 hp, aggressive streetfighter styling, advanced electronics with riding modes, fully adjustable suspension, and agile performance for urban and spirited riding.",
      price: 1017500,
    },
    {
      id: 7,
      bikeName: "Yamaha",
      model: "YZF-R1",
      details: "A flagship sportbike known for its performance on the track.",
      image:
        "https://cdp.azureedge.net/products/USA/YA/2023/MC/SUPERSPORT/YZF-R1/50/PERFORMANCE_BLACK/2000000024.jpg",
      spc: "998cc inline-four, 200 hp, iconic supersport design, advanced electronics with multiple riding modes, race-inspired components for precision, high-performance track and street motorcycle.",
      price: 2039000,
    },
    {
      id: 8,
      bikeName: "Suzuki",
      model: "GSX-S750",
      details: "A naked bike with a powerful engine and responsive handling.",
      image:
        "https://www.bdprice.com.bd/wp-content/uploads/2020/05/Suzuki-GSX-S750-Front-.jpg",
      spc: "749cc inline-four, 113 hp, aggressive naked styling, comfortable riding position, adjustable suspension, optional ABS for safety.",
      price: 820000,
    },
    {
      id: 9,
      bikeName: "Indian",
      model: "Chieftain",
      details: "A touring cruiser with modern amenities and a classic look.",
      image:
        "https://cdp.azureedge.net/products/USA/IDN/2022/MC/CRUISER/CHIEFTAIN_LIMITED/49/SILVER_QUARTZ_METALLIC/2000000001.jpg",
      spc: "Thunderstroke 111 V-twin, 1,811cc, classic cruiser with modern amenities, comfortable touring design, infotainment system, and optional customizations.",
      price: 2240000,
    },
    {
      id: 10,
      bikeName: "KTM",
      model: "1290 Super Duke R",
      details: "A beastly naked bike with thrilling acceleration and handling.",
      image:
        "https://ridermagazine.com/wp-content/uploads/2021/11/415770_MY22-KTM-1290-SUPER-DUKE-R-EVO-US-_45_-right-front_.jpg",
      spc: "1301cc V-twin, 177 hp, aggressive styling, advanced electronics, Brembo brakes with cornering ABS, customizable and comfortable.",
      price: 480000,
    },
  ];

  // console.log(bikes);

  return (
    <div>
      <h4 className="text-white font-bold text-4xl my-3 italic">
        Here is our Collections
      </h4>
      <p className="text-lg">Find your desired one</p>
      <div
        className="grid grid-cols-3 gap-3 w-11/12 mx-auto"
        uk-scrollspy="cls: uk-animation-slide-bottom; target: .b-card; delay: 300; repeat: true"
      >
        {bikes.map((bike) => (
          <Bike
            key={bike.id}
            bike={bike}
          ></Bike>
        ))}
      </div>
    </div>
  );
};
export default Bikes;
