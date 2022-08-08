import React from "react";
import Hotel from "./Hotel.js";
import { hotels } from "../data.js";

const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;

const HotelsList = (props) => {
  const filterCallback = (hotel) => {
    const everyCallback = (filter) => hotel[filter];
    return props.selectedFilters.every(everyCallback);
  };
  const filteredHotels = hotels.filter(filterCallback);

  const hotelListElements = filteredHotels.map(renderHotel);
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;