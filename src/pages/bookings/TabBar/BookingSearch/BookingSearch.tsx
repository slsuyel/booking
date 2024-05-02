import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  InputNumber,
  Select,
  message,
  DatePicker,
} from "antd";
import { CitySearch } from "../../../../types/types";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const BookingSearch = () => {
  const navigate = useNavigate();
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [cities, setCities] = useState([]);

  const [searchValue, setSearchValue] = useState({
    location: "",
    adults: 1,
    children: 0,
    rooms: 1,
    entireHome: false,
    dateRange: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/population/cities"
        );
        const data = await response.json();
        setCities(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  const handleLocationChange = (value: string) => {
    setSearchValue({ ...searchValue, location: value });
  };

  const handleAdultsChange = (value: number | null) => {
    if (value !== null) {
      setSearchValue({ ...searchValue, adults: value });
    }
  };

  const handleChildrenChange = (value: number | null) => {
    if (value !== null) {
      setSearchValue({ ...searchValue, children: value });
    }
  };

  const handleRoomsChange = (value: number | null) => {
    if (value !== null) {
      setSearchValue({ ...searchValue, rooms: value });
    }
  };

  const handleEntireHomeChange = (e: CheckboxChangeEvent) => {
    setSearchValue({ ...searchValue, entireHome: e.target.checked });
  };

  const handleSearch = () => {
    if (!searchValue.dateRange.length) {
      console.error("Date Range is empty. Please provide valid dates.");
      message.error("Please provide all fields");
      return;
    }
    const dateRangeString = searchValue.dateRange.join(",");
    const params = new URLSearchParams({
      location: searchValue.location,
      dateRange: dateRangeString,
      adults: searchValue.adults.toString(),
      children: searchValue.children.toString(),
      rooms: searchValue.rooms.toString(),
      entireHome: searchValue.entireHome.toString(),
    }).toString();
    navigate(`/hotel-search?${params}`);
  };

  return (
    <div className="bg-info-subtle mx-auto py-5 rounded row w-100  shadow-sm">
      <div className="col-md-4 my-1">
        <div className="position-relative ">
          <Select
            showSearch
            className="p3selc"
            placeholder="Select a location"
            optionFilterProp="children"
            onChange={handleLocationChange}
            style={{ width: "100%", height: 40 }}
          >
            {cities.map((city: CitySearch) => (
              <Option key={city.city} value={city.city}>
                <i className="fa-solid fa-location-dot"></i> {city.city},{" "}
                {city.country}
              </Option>
            ))}
          </Select>
          <i className="fa-solid fa-bed bed-icon"></i>
        </div>
      </div>
      <div className="col-md-3 my-1">
        <DatePicker.RangePicker
          onChange={(dateStrings) =>
            setSearchValue({ ...searchValue, dateRange: dateStrings })
          }
          format="YYYY-MM-DD"
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
  );
};

export default BookingSearch;
