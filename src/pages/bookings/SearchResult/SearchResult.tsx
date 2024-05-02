import { useLocation } from "react-router-dom";
import BookingSearch from "../TabBar/BookingSearch/BookingSearch";
import { Button } from "antd";
import { useState } from "react";

const SearchResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationValue = searchParams.get("location");
  const dateRangeValue = searchParams.getAll("dateRange");
  const adultsValue = Number(searchParams.get("adults") || 0);
  const childrenValue = Number(searchParams.get("children") || 0);
  const roomsValue = searchParams.get("rooms");
  const [modify, setModify] = useState(false);

  return (
    <div className="my-5">
      <div className="align-items-center container d-flex justify-content-between p-3 shadow">
        <div>
          <h4>{locationValue}</h4>
          <p>
            {dateRangeValue} {adultsValue + childrenValue} Persons -{" "}
            {roomsValue} Rooms
          </p>
        </div>

        <div>
          <Button onClick={() => setModify(!modify)}>Modify Search</Button>
        </div>
      </div>

      <div className="my-3 container w-100">{modify && <BookingSearch />}</div>
    </div>
  );
};

export default SearchResult;
