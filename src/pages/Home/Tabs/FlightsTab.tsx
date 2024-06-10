/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  Radio,
  Select,
  Button,
  InputNumber,
  DatePicker,
  message,
  Checkbox,
} from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Dayjs } from 'dayjs';
import useAirports from '../../../hooks/useAirports';
import { Spinner } from 'react-bootstrap';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const { Option } = Select;

interface Airport {
  name: string;
  country: string;
}

interface SearchValue {
  adults: number;
  children: number;
  date: string | null;
  radio: number;
  addCar: boolean;
  departure: string | null;
  destination: string | null;
}

const FlightsTab = () => {
  const { loading, data } = useAirports();

  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<SearchValue>({
    adults: 1,
    children: 0,
    date: null,
    radio: 1,
    addCar: false,
    departure: null,
    destination: null,
  });

  const toggleSection = (): void => {
    setIsSectionOpen(!isSectionOpen);
  };

  const handleAdultsChange = (value: number): void => {
    setSearchValue(prevState => ({
      ...prevState,
      adults: value >= 1 ? value : 1,
    }));
  };
  const handleAddCar = (e: CheckboxChangeEvent) => {
    setSearchValue({ ...searchValue, addCar: e.target.checked });
  };

  const handleChildrenChange = (value: number): void => {
    setSearchValue(prevState => ({ ...prevState, children: value }));
  };

  const handleDateChange = (date: Dayjs | null, dateString: string): void => {
    setSearchValue(prevState => ({ ...prevState, date: dateString }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const radioValue = parseInt(e.target.value);
    setSearchValue(prevState => ({ ...prevState, radio: radioValue }));
  };

  const handleDepartureChange = (value: string): void => {
    setSearchValue(prevState => ({ ...prevState, departure: value }));
  };

  const handleDestinationChange = (value: string): void => {
    setSearchValue(prevState => ({ ...prevState, destination: value }));
  };

  const handleSearch = () => {
    const { departure, destination, date, adults } = searchValue;
    if (!departure || !destination || !date || !adults) {
      message.error('Please select all fields.');
      return;
    }

    if (departure === destination) {
      message.error('Departure and destination airports cannot be the same.');
      return;
    }

    console.log(searchValue);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="row mx-auto">
      <div className="px-2">
        <Radio.Group
          defaultValue={1}
          style={{ marginBottom: 16 }}
          onChange={handleRadioChange as any}
        >
          <Radio value={1}>One-way</Radio>
          <Radio value={2}>Round-trip</Radio>
          <Radio disabled value={3}>
            Multi-city
          </Radio>
        </Radio.Group>
      </div>

      <div className="col-md-6">
        <Select
          showSearch
          className="p3selc"
          placeholder="Departure From"
          optionFilterProp="children"
          style={{ width: '100%', height: 50, marginBottom: 16 }}
          onChange={handleDepartureChange}
          value={searchValue.departure}
        >
          {data.map((d: Airport) => (
            <Option key={d.name} value={d.name}>
              {d.name}, {d.country}
            </Option>
          ))}
        </Select>
      </div>
      <div className="col-md-6">
        <Select
          showSearch
          className="p3selc"
          placeholder="Going to"
          optionFilterProp="children"
          style={{ width: '100%', height: 50, marginBottom: 16 }}
          onChange={handleDestinationChange}
          value={searchValue.destination}
        >
          {data.map((d: Airport) => (
            <Option key={d.name} value={d.name}>
              {d.name}, {d.country}
            </Option>
          ))}
        </Select>
      </div>

      <div className="col-md-6 my-2">
        <DatePicker
          style={{ width: '100%', height: 50, marginBottom: 16 }}
          onChange={handleDateChange as any}
          placeholder="Journey Date"
        />
      </div>

      <div className="col-md-6 my-2 position-relative">
        <Button
          style={{ width: '100%', height: 50 }}
          size="large"
          type="primary"
          className="toggle-btn-child-adult w-100"
          onClick={toggleSection}
        >
          <span className="text-dark">
            <UserOutlined /> {searchValue.adults} Adult · <TeamOutlined />{' '}
            {searchValue.children} Children
          </span>
        </Button>
        {isSectionOpen && (
          <div
            className="card p-3 mt-2 position-absolute w-100"
            style={{ zIndex: 200, top: 'calc(60% + 20px)', left: '0px' }}
          >
            <InputNumber
              defaultValue={searchValue.adults}
              min={1}
              style={{ width: '100%', marginBottom: '8px' }}
              addonBefore={<UserOutlined />}
              onChange={handleAdultsChange as any}
            />
            <InputNumber
              defaultValue={searchValue.children}
              min={0}
              style={{ width: '100%', marginBottom: '8px' }}
              addonBefore={<TeamOutlined />}
              onChange={handleChildrenChange as any}
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
        <button onClick={handleSearch}>
          <div className="shimmer" />
          <span className="text-black"> Search Flights</span>
        </button>
      </div>
    </div>
  );
};

export default FlightsTab;
