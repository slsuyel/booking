/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {
  Button,
  Checkbox,
  InputNumber,
  Select,
  message,
  DatePicker,
  Form,
} from 'antd';
import { CitySearch } from '../../../types/types';
import useCities from '../../../hooks/useCities';
import { useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker;
const { Option } = Select;

const BookingSearch = () => {
  const navigate = useNavigate();

  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const { cities, loading } = useCities();
  const [formValues, setFormValues] = useState({
    location: undefined,
    dates: undefined,
    adults: 1,
    children: 0,
    rooms: 1,
    addCar: false,
  });

  const handleChange = (changedValues: any) => {
    setFormValues(prevValues => ({
      ...prevValues,
      ...changedValues,
    }));
  };

  const handleSearch = () => {
    if (!formValues.dates || !formValues.location || !cities.length) {
      message.error('Please select dates and location');
      return;
    }
    navigate('/booking-results', { state: formValues });

    console.log(formValues);
  };

  if (loading) {
    return null;
  }

  return (
    <div className="col-md-11 mx-auto">
      <Form
        className="mx-auto rounded row w-100 py-3"
        onValuesChange={handleChange}
      >
        <Form.Item
          rules={[{ required: true, message: 'Please select a location!' }]}
          name="location"
          className="col-md-12 my-2"
        >
          <Select
            showSearch
            placeholder="Where to go?"
            optionFilterProp="children"
            style={{ width: '100%', height: 50 }}
          >
            {cities.map((city: CitySearch) => (
              <Option key={city.city} value={city.city}>
                <i className="fa-solid fa-location-dot"></i> {city.city},{' '}
                {city.country}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: 'Please select a date!' }]}
          name="dates"
          className="col-md-6 mx-auto dt-range-picker my-2"
        >
          <RangePicker
            style={{ width: '100%', height: 50 }}
            format="YYYY-MM-DD"
            disabledDate={current =>
              current && current.startOf('day').isBefore(new Date())
            }
          />
        </Form.Item>

        <div className="col-md-6 my-2 position-relative">
          <Button
            style={{ width: '100%', height: 50 }}
            size="large"
            type="primary"
            onClick={() => setIsSectionOpen(!isSectionOpen)}
          >
            {formValues.adults} Adult · {formValues.children} Children ·{' '}
            {formValues.rooms} Room <i className="fa-solid fa-person ms-2"></i>
          </Button>

          {isSectionOpen && (
            <div
              className="card p-3 mt-2 position-absolute w-100"
              style={{ zIndex: '200', top: 'calc(60% + 20px)', left: '30px' }}
            >
              <Form.Item name="adults" noStyle>
                <InputNumber
                  min={0}
                  value={formValues.adults}
                  onChange={value => handleChange({ adults: value })}
                  style={{ width: '100%', marginBottom: '8px' }}
                  addonBefore="Adults"
                />
              </Form.Item>
              <Form.Item name="children" noStyle>
                <InputNumber
                  min={0}
                  value={formValues.children}
                  onChange={value => handleChange({ children: value })}
                  style={{ width: '100%', marginBottom: '8px' }}
                  addonBefore="Children"
                />
              </Form.Item>
              <Form.Item name="rooms" noStyle>
                <InputNumber
                  min={0}
                  value={formValues.rooms}
                  onChange={value => handleChange({ rooms: value })}
                  style={{ width: '100%' }}
                  addonBefore="Rooms"
                />
              </Form.Item>
              <Button
                className="mt-2"
                onClick={() => {
                  setIsSectionOpen(false);
                }}
              >
                Ok
              </Button>
            </div>
          )}
        </div>

        <Form.Item className="col-md-6 my-2">
          <div
            className="align-items-center border d-flex gap-1 ps-4 rounded text-primary"
            style={{ height: 50, background: '#ddeefd' }}
          >
            Bundle + Save{' '}
            <Form.Item name="addCar" valuePropName="checked" noStyle>
              <Checkbox
                checked={formValues.addCar}
                onChange={e => handleChange({ addCar: e.target.checked })}
              />
            </Form.Item>{' '}
            Add a car
          </div>
        </Form.Item>

        <Form.Item className="col-md-6 my-2">
          <button
            className="header-btn w-100"
            style={{ padding: '14px 0px' }}
            onClick={handleSearch}
          >
            Find Your Hotel
          </button>
        </Form.Item>

        <div className="mt-4">
          <hr />
          <h6 className="text-center mb-0">
            Book all of your hotels at once and save up to $625
          </h6>
        </div>
      </Form>
    </div>
  );
};

export default BookingSearch;
