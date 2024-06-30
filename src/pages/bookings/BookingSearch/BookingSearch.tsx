/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {
  Button,
  Checkbox,
  InputNumber,
  Select,
  message,
  DatePicker,
} from 'antd';
const { RangePicker } = DatePicker;
import { CitySearch } from '../../../types/types';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useNavigate } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import SButton from '../../../components/reusable/Button';
import useCities from '../../../hooks/useCities';

const { Option } = Select;

const BookingSearch = () => {
  const navigate = useNavigate();
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const { cities, loading } = useCities();
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);

  const [searchValue, setSearchValue] = useState({
    location: '',
    adults: 1,
    children: 0,
    rooms: 1,
    addCar: false,
    checkIn: '',
    checkOut: '',
  });

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };
  const handleDateChange = (dates: [Dayjs | null, Dayjs | null]) => {
    setDates(dates);
    if (dates[0] && dates[1]) {
      setSearchValue({
        ...searchValue,
        checkIn: dates[0].format('YYYY-MM-DD'),
        checkOut: dates[1].format('YYYY-MM-DD'),
      });
    }
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

  const handleAddCar = (e: CheckboxChangeEvent) => {
    setSearchValue({ ...searchValue, addCar: e.target.checked });
  };

  const handleSearch = () => {
    if (!dates[0] || !dates[1] || !cities.length) {
      message.error('Please select dates and location');
      return;
    }

    const params = new URLSearchParams({
      location: searchValue.location,
      adults: searchValue.adults.toString(),
      children: searchValue.children.toString(),
      rooms: searchValue.rooms.toString(),
      addCar: searchValue.addCar ? 'true' : 'false',
      checkIn: searchValue.checkIn,
      checkOut: searchValue.checkOut,
    }).toString();

    const recentSearch = {
      location: searchValue.location,
      dates: [searchValue.checkIn, searchValue.checkOut],
      people: searchValue.adults + searchValue.children,
    };

    const recentSearchesString = localStorage.getItem('recentSearches');
    const recentSearches = recentSearchesString
      ? JSON.parse(recentSearchesString)
      : [];
    recentSearches.unshift(recentSearch);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));

    navigate(`/hotel-search?${params}`);
  };

  if (loading) {
    return null;
  }

  return (
    <div className=" mx-auto rounded row w-100  py-3">
      <div className="col-md-12 my-2">
        <div className="position-relative ">
          <Select
            showSearch
            className="p3selc"
            placeholder="Where to go?"
            optionFilterProp="children"
            onChange={handleLocationChange}
            style={{ width: '100%', height: 50 }}
          >
            {cities.map((city: CitySearch) => (
              <Option key={city.city} value={city.city}>
                <i className="fa-solid fa-location-dot"></i> {city.city},{' '}
                {city.country}
              </Option>
            ))}
          </Select>
          <i className="fa-solid fa-bed bed-icon"></i>
        </div>
      </div>
      <div className="col-md-6  mx-auto  dt-range-picker  my-2">
        <RangePicker
          style={{ width: '100%', height: 50 }}
          inputReadOnly
          format="YYYY-MM-DD"
          className="p-2"
          value={dates}
          onChange={handleDateChange as any}
          disabledDate={current =>
            current && current.startOf('day').isBefore(new Date())
          }
        />
      </div>
      <div className="col-md-6   my-2 position-relative">
        <Button
          style={{ width: '100%', height: 50 }}
          size="large"
          type="primary"
          className="ant-btn-lg ant-btn-primary ant-input ant-input-outlined css-dev-only-do-not-override-kghr11 text-secondary toggle-btn-child-adult w-100"
          onClick={toggleSection}
        >
          {searchValue.adults} Adult· {searchValue.children} Children ·{' '}
          {searchValue.rooms} Room <i className="fa-solid fa-person ms-2"></i>
        </Button>
        {isSectionOpen && (
          <div
            className="card p-3 mt-2 position-absolute w-100"
            style={{ zIndex: '200', top: 'calc(60% + 20px)', left: '30px' }}
          >
            <InputNumber
              defaultValue={searchValue.adults}
              min={0}
              style={{ width: '100%', marginBottom: '8px' }}
              addonBefore="Adults"
              onChange={handleAdultsChange}
            />
            <InputNumber
              defaultValue={searchValue.children}
              min={0}
              style={{ width: '100%', marginBottom: '8px' }}
              addonBefore="Children"
              onChange={handleChildrenChange}
            />
            <InputNumber
              defaultValue={searchValue.rooms}
              min={0}
              style={{ width: '100%' }}
              addonBefore="Rooms"
              onChange={handleRoomsChange}
            />
            <Button className="mt-2" onClick={toggleSection}>
              Ok
            </Button>
          </div>
        )}
      </div>
      <div className="col-md-6 my-2 my-auto">
        <div
          className="align-items-center border d-flex gap-1 ps-4 rounded text-primary"
          style={{ height: 50, background: '#ddeefd' }}
        >
          Bundle + Save <Checkbox onChange={handleAddCar}></Checkbox> Add a car
        </div>
      </div>
      <div className="col-md-6 my-2 btn_find">
        <SButton onClick={handleSearch}>Find Your Hotel</SButton>
      </div>

      <div className="mt-4">
        <hr />
        <h6 className="text-center mb-0 ">
          Book all of your hotels at once and save up to $625
        </h6>
      </div>
    </div>
  );
};

export default BookingSearch;
