import { Checkbox, DatePicker, Form, Select, TimePicker } from 'antd';
import useCities from '../../../hooks/useCities';
import { CitySearch } from '../../../types/types';
import { useState } from 'react';

const { Option } = Select;

const CarsTab = () => {
  const [isDifferentLocation, setIsDifferentLocation] = useState(false);

  const { cities, loading } = useCities();
  const [searchValue, setSearchValue] = useState({});
  const [form] = Form.useForm();

  const handleLocationChange = (value: string) => {
    setSearchValue({ ...searchValue, location: value });
  };

  const handleCheckboxChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsDifferentLocation(e.target.checked);
    console.log('Checkbox checked:', e.target.checked);
  };

  const handleAddCar = (e: { target: { checked: boolean } }) => {
    setSearchValue({ ...searchValue, addCar: e.target.checked });
  };

  const handleSearch = () => {
    form
      .validateFields()
      .then(values => {
        console.log('Form values:', values);
      })
      .catch(errorInfo => {
        console.log('Validation Failed:', errorInfo);
      });
  };

  if (loading) {
    return null;
  }

  return (
    <Form form={form} className="col-md-11 mx-auto">
      <div className="row mx-auto">
        <div
          className={`${isDifferentLocation ? 'col-md-6' : 'col-md-12'} mt-2`}
        >
          <div className="position-relative ">
            <Form.Item
              className="mb-1"
              name="location"
              rules={[{ required: true, message: 'Please select a location!' }]}
            >
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
            </Form.Item>
            <i className=" mt-2 bed-icon fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {isDifferentLocation && (
          <div className="col-md-6 mt-2">
            <div className="position-relative ">
              <Form.Item
                className="mb-1"
                name="differentLocation"
                rules={[
                  { required: true, message: 'Please select a location!' },
                ]}
              >
                <Select
                  showSearch
                  className="p3selc "
                  placeholder="Search city"
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
              </Form.Item>
              <i className=" mt-2 bed-icon fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        )}

        <Form.Item>
          <Checkbox onChange={handleCheckboxChange}>
            Return car to a different location
          </Checkbox>
        </Form.Item>

        <div className="col-md-3">
          <Form.Item
            name="pickupDate"
            rules={[
              { required: true, message: 'Please select a pickup date!' },
            ]}
          >
            <DatePicker
              placeholder="Pick-up"
              style={{ height: 50, width: '100%' }}
            />
          </Form.Item>
        </div>
        <div className="col-md-3">
          <Form.Item
            name="pickupTime"
            rules={[
              { required: true, message: 'Please select a pickup time!' },
            ]}
          >
            <TimePicker
              placeholder="Pick-Up Time"
              format={'HH:mm'}
              style={{ height: 50, width: '100%' }}
            />
          </Form.Item>
        </div>
        <div className="col-md-3">
          <Form.Item name="dropoffDate">
            <DatePicker
              placeholder="Drop-off"
              style={{ height: 50, width: '100%' }}
            />
          </Form.Item>
        </div>
        <div className="col-md-3">
          <Form.Item name="dropoffTime">
            <TimePicker
              placeholder="Drop-off Time"
              format={'HH:mm'}
              style={{ height: 50, width: '100%' }}
            />
          </Form.Item>
        </div>

        <div className="col-md-6 my-2 my-auto">
          <div
            className="align-items-center border d-flex gap-1 ps-4 rounded text-primary"
            style={{ height: 50, background: '#ddeefd' }}
          >
            Bundle + Save <Checkbox onChange={handleAddCar}></Checkbox> Add a
            car
          </div>
        </div>
        <div className="col-md-6 my-2 ">
          <button className="header-btn w-100" onClick={handleSearch}>
            Find Your Car
          </button>
        </div>
      </div>
    </Form>
  );
};

export default CarsTab;
