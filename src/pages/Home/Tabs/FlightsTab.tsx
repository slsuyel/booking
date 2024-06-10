/* eslint-disable @typescript-eslint/no-explicit-any */
import { Radio, Select, Button, InputNumber, DatePicker } from 'antd';
import { useState } from 'react';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Dayjs } from 'dayjs';

const { Option } = Select;

interface SearchValue {
  adults: number;
  children: number;
  date: string | null;
  radio: number;
}

const FlightsTab: React.FC = () => {
  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<SearchValue>({
    adults: 1,
    children: 0,
    date: null,
    radio: 1,
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

  const handleChildrenChange = (value: number): void => {
    setSearchValue(prevState => ({ ...prevState, children: value }));
  };

  const handleDateChange = (date: Dayjs | null, dateString: string): void => {
    console.log(date, dateString);
    setSearchValue(prevState => ({ ...prevState, date: dateString }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const radioValue = parseInt(e.target.value);
    setSearchValue(prevState => ({ ...prevState, radio: radioValue }));
  };

  const handleSearch = (): void => {
    console.log(searchValue);
  };

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
        >
          <Option value="DHK1">Dhaka International</Option>
          <Option value="DHK2">Dhaka Domestic</Option>
          <Option value="DHK3">Chittagong</Option>
        </Select>
      </div>
      <div className="col-md-6">
        <Select
          showSearch
          className="p3selc"
          placeholder="Going to"
          optionFilterProp="children"
          style={{ width: '100%', height: 50, marginBottom: 16 }}
        >
          <Option value="JFK">New York JFK</Option>
          <Option value="LAX">Los Angeles LAX</Option>
          <Option value="ORD">Chicago ORD</Option>
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

      <div className="col-md-12 my-2">
        <Button
          style={{ width: '100%', height: 50 }}
          size="large"
          type="primary"
          onClick={handleSearch}
        >
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightsTab;
