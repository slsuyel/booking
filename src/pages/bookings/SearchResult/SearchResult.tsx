import { useLocation } from "react-router-dom";
import BookingSearch from "../BookingSearch/BookingSearch";
import { Button } from "antd";
import { useState } from "react";
import HotelCard from "./HotelCard";
import FilterSearch from "./FilterSearch";
import "../Styles/Bookings.css";

const SearchResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationValue = searchParams.get("location");
  const adultsValue = Number(searchParams.get("adults") || 0);
  const childrenValue = Number(searchParams.get("children") || 0);
  const roomsValue = searchParams.get("rooms");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const [modify, setModify] = useState(false);

  return (
    <div className="my-5">
      <div className="align-items-center container d-flex justify-content-between p-3 shadow">
        <div>
          <h4>{locationValue}</h4>
          <p>
            {checkIn} to {checkOut}, {adultsValue + childrenValue} Persons -{" "}
            {roomsValue} Rooms
          </p>
        </div>
        <div>
          <Button type="primary" onClick={() => setModify(!modify)}>
            Modify Search
          </Button>
        </div>
      </div>

      <div className="container mt-3">{modify && <BookingSearch />}</div>

      <div className="row mx-auto container ">
        <div className="col-md-3">
          <FilterSearch />
        </div>
        <div className="col-md-9">
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
