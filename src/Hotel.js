import React, { useState, useEffect } from "react";
import { hotelsData } from "./data";

const Hotel = () => {
  const [hotels, setHotels] = useState(hotelsData);
  // console.log(hotels.length);
  const removeHotel = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };
  return (
    <main>
      <header>
        {hotels.length === 0 ? <h1>No hotels available</h1> : <h1>Hotels in Uyo</h1>}
      </header>
      {hotels.map((hotel) => {
        const { id, image, name, pricePerNight, description } = hotel;
        return (
          <section key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h3>{pricePerNight}</h3>
            <p>{description}</p>
            <button onClick={() => removeHotel(id)}>remove hotel</button>
          </section>
        );
      })}
    </main>
  );
};

export default Hotel;
