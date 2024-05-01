import { useState } from "react";
import { DatePicker, Input, Button, Checkbox, InputNumber } from "antd";

const BookingSearch = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [searchValue, setSearchValue] = useState({
    location: "",
    dateRange: [],
    adults: 1,
    children: 0,
    rooms: 1,
    entireHome: false,
  });

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const handleLocationChange = (e) => {
    setSearchValue({ ...searchValue, location: e.target.value });
  };

  const handleDateRangeChange = (dates) => {
    setSearchValue({ ...searchValue, dateRange: dates });
  };

  const handleAdultsChange = (value) => {
    setSearchValue({ ...searchValue, adults: value });
  };

  const handleChildrenChange = (value) => {
    setSearchValue({ ...searchValue, children: value });
  };

  const handleRoomsChange = (value) => {
    setSearchValue({ ...searchValue, rooms: value });
  };

  const handleEntireHomeChange = (e) => {
    setSearchValue({ ...searchValue, entireHome: e.target.checked });
  };

  const handleSearch = () => {
    console.log("Search Value:", searchValue);
    // Perform search logic here
  };

  return (
    <div className="container">
      <div className="bg-info-subtle mx-auto py-5 rounded row shadow-sm">
        <div className="col-md-4 my-1">
          <div className="position-relative ">
            <Input
              className="p-2 px-3"
              placeholder="New York"
              onChange={handleLocationChange}
            />
            <i className="fa-solid fa-bed bed-icon"></i>
          </div>
        </div>
        <div className="col-md-3 my-1">
          <DatePicker.RangePicker
            disabledDate={(current) => {
              return current && current.valueOf() <= Date.now();
            }}
            className="p-2 px-3"
            onChange={handleDateRangeChange}
          />
        </div>
        <div className="col-md-3 my-1 position-relative">
          <Button
            size="large"
            type="primary"
            className="ant-btn-lg ant-btn-primary ant-input ant-input-outlined css-dev-only-do-not-override-kghr11 text-secondary toggle-btn-child-adult"
            onClick={toggleSection}
          >
            {searchValue.adults} adult · {searchValue.children} children ·{" "}
            {searchValue.rooms} room <i className="fa-solid fa-person ms-2"></i>
          </Button>
          {isSectionOpen && (
            <div
              className="card p-3 mt-2 position-absolute w-100"
              style={{ zIndex: "200", top: "calc(60% + 10px)", left: "0" }}
            >
              <InputNumber
                defaultValue={searchValue.adults}
                min={0}
                style={{ width: "100%", marginBottom: "8px" }}
                addonBefore="Adults"
                onChange={handleAdultsChange}
              />
              <InputNumber
                defaultValue={searchValue.children}
                min={0}
                style={{ width: "100%", marginBottom: "8px" }}
                addonBefore="Children"
                onChange={handleChildrenChange}
              />
              <InputNumber
                defaultValue={searchValue.rooms}
                min={0}
                style={{ width: "100%" }}
                addonBefore="Rooms"
                onChange={handleRoomsChange}
              />
              <Button onClick={toggleSection}>Ok</Button>
            </div>
          )}
        </div>
        <div className="col-md-2 my-1">
          <Button
            size="large"
            type="primary"
            className="w-100"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
        <div className=" my-1">
          <Checkbox onChange={handleEntireHomeChange}>
            I'm looking for an entire home or apartment
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default BookingSearch;
