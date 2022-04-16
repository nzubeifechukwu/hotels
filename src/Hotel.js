import React, { useState, useEffect } from "react";
import { hotelsData } from "./data";

const Hotel = () => {
  const [hotels, setHotels] = useState(hotelsData);
  const [readMore, setReadMore] = useState(false);

  const removeHotel = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  return (
    <main>
      <header>
        {hotels.length === 0 ? (
          <main>
            <h1>No hotels available</h1>
            <button onClick={() => setHotels(hotelsData)}>refresh</button>
          </main>
        ) : (
          <h1>Hotels in Uyo</h1>
        )}
      </header>
      {hotels.map((hotel) => {
        const { id, image, name, pricePerNight, description } = hotel;
        return (
          <section key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h3>{pricePerNight}</h3>
            <p>
              {readMore ? description : `${description.substring(0, 200)}...`}
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "see less" : "read more"}
              </button>
            </p>
            <button onClick={() => removeHotel(id)}>remove hotel</button>
          </section>
        );
      })}
    </main>
  );
};

export default Hotel;
