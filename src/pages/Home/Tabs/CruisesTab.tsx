import { useState } from 'react';
import { Form, Select } from 'antd';
import SButton from '../../../components/reusable/Button';
const { Option } = Select;

const destinationOptions = [
  { value: 'C', label: 'Caribbean' },
  { value: 'M', label: 'Mexico' },
  { value: 'BH', label: 'Bahamas' },
];

const departingOptions = [
  { value: '06/1/2024', label: 'June 2024' },
  { value: '07/1/2024', label: 'July 2024' },
  { value: '08/1/2024', label: 'August 2024' },
];

const cruiseLengthOptions = [
  { value: 'all', label: 'All' },
  { value: '1-2', label: '1-2 Nights' },
  { value: '3-5', label: '3-5 Nights' },
];

const cruiseLineOptions = [
  { value: 'ALL', label: 'All Cruise Lines' },
  { value: '92', label: 'AmaWaterways' },
  { value: '323', label: 'American Cruise Lines' },
];

const CruisesTab = () => {
  const [destination, setDestination] = useState(null);
  const [departing, setDeparting] = useState(null);
  const [cruiseLength, setCruiseLength] = useState(null);
  const [cruiseLine, setCruiseLine] = useState(null);

  const handleBookNow = () => {
    console.log('Selected Values:');
    console.log('Destination:', destination);
    console.log('Departing:', departing);
    console.log('Cruise Length:', cruiseLength);
    console.log('Cruise Line:', cruiseLine);
  };

  return (
    <Form>
      <div className="row mx-auto">
        <div className="col-md-6 mt-2">
          <div className="position-relative ">
            <Form.Item className="mb-1" name="destination">
              <Select
                showSearch
                className="p3selc"
                placeholder="Destination (Any)"
                optionFilterProp="children"
                style={{ width: '100%', height: 50 }}
                onChange={value => setDestination(value)}
                value={destination}
              >
                {destinationOptions.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <i className=" mt-2 bed-icon fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="position-relative ">
            <Form.Item className="mb-1" name="departing">
              <Select
                showSearch
                className="p3selc"
                placeholder="Departing"
                optionFilterProp="children"
                style={{ width: '100%', height: 50 }}
                onChange={value => setDeparting(value)}
                value={departing}
              >
                {departingOptions.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <i className=" mt-2 bed-icon fa-regular fa-calendar"></i>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="position-relative ">
            <Form.Item className="mb-1" name="cruiseLength">
              <Select
                showSearch
                className="p3selc"
                placeholder="Cruise Length (Any)"
                optionFilterProp="children"
                style={{ width: '100%', height: 50 }}
                onChange={value => setCruiseLength(value)}
                value={cruiseLength}
              >
                {cruiseLengthOptions.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <i className=" mt-2 bed-icon fa-regular fa-clock"></i>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="position-relative ">
            <Form.Item className="mb-1" name="cruiseLine">
              <Select
                showSearch
                className="p3selc"
                placeholder="Cruise Line (Any)"
                optionFilterProp="children"
                style={{ width: '100%', height: 50 }}
                onChange={value => setCruiseLine(value)}
                value={cruiseLine}
              >
                {cruiseLineOptions.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <i className=" mt-2 bed-icon fa-solid fa-ship"></i>
          </div>
        </div>
        <div className="col-md-4 my-2 btn_find">
          <SButton onClick={handleBookNow}>Book Now</SButton>
        </div>
      </div>
    </Form>
  );
};

export default CruisesTab;
