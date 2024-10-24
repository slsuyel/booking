/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Form, Input, message, Card } from 'antd';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const BookingResults = () => {
  const location = useLocation();
  const bookingData = location.state; // Get the passed booking data

  const [form] = Form.useForm();

  console.log(bookingData);

  // Populate form with booking data
  const [initialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: 'Bangladesh', // Set default country
    phone: '',
    location: bookingData.location,
    dates: bookingData.dates.join(' - '),
    adults: bookingData.adults,
    children: bookingData.children,
    rooms: bookingData.rooms,
    addCar: bookingData.addCar,
  });

  const handleSubmit = (values: any) => {
    console.log('Updated Booking Info:', values);
    message.success('Booking information submitted successfully!');
  };

  return (
    <div className="bg-body-secondary">
      <div className="row mx-auto container py-5">
        <div className="col-md-4 my-1">
          <Card
            title={<span className="fs-5">Your Booking Details</span>}
            style={{ marginBottom: '20px' }}
          >
            <Form
              layout="vertical"
              form={form}
              initialValues={initialValues}
              onFinish={handleSubmit}
            >
              <Form.Item className="mb-0" label="Location" name="location">
                <Input placeholder="Location" className="py-2 my-1" />
              </Form.Item>

              <Form.Item className="mb-0" label="Dates" name="dates">
                <Input
                  placeholder="Dates (e.g., 2024-10-01 to 2024-10-05)"
                  className="py-2 my-1"
                />
              </Form.Item>

              <div className=" mt-2 d-flex justify-content-between gap-2">
                <Form.Item className="mb-0" label="Adults" name="adults">
                  <Input
                    type="number"
                    placeholder="Adults"
                    className="py-2 my-1"
                  />
                </Form.Item>
                <Form.Item className="mb-0" label="Children" name="children">
                  <Input
                    type="number"
                    placeholder="Children"
                    className="py-2 my-1"
                  />
                </Form.Item>
              </div>
              <Form.Item className="mb-0" label="Rooms" name="rooms">
                <Input
                  type="number"
                  placeholder="Rooms"
                  className="py-2 my-1"
                />
              </Form.Item>
            </Form>
          </Card>
        </div>

        <div className="col-md-8 my-1">
          <Card
            title={<span className="fs-5">Provide Your Information</span>}
            bordered={false}
          >
            <Form
              form={form}
              initialValues={initialValues}
              onFinish={handleSubmit}
              layout="vertical"
            >
              <div className="row mb-0">
                <Form.Item
                  className="col-md-6 my-1"
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: 'First name is required!' },
                  ]}
                >
                  <Input placeholder="First Name*" className="py-2 my-1" />
                </Form.Item>

                <Form.Item
                  className="col-md-6 my-1"
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: 'Last name is required!' },
                  ]}
                >
                  <Input placeholder="Last Name*" className="py-2 my-1" />
                </Form.Item>
              </div>

              <div className="row ">
                <Form.Item
                  className="col-md-6 my-1"
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: 'Email address is required!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input placeholder="Email Address*" className="py-2 my-1" />
                </Form.Item>

                <Form.Item
                  className="col-md-6 my-1"
                  label="Phone Number"
                  name="phone"
                  rules={[
                    { required: true, message: 'Phone number is required!' },
                  ]}
                >
                  <Input placeholder="Phone Number*" className="py-2 my-1" />
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  className="my-1"
                  label="Address"
                  name="address"
                  rules={[{ required: true, message: 'Address is required!' }]}
                >
                  <Input placeholder="Address*" className="py-2 my-1" />
                </Form.Item>
              </div>

              <div className=" row">
                <Form.Item
                  className=" col-md-4"
                  label="City"
                  name="city"
                  rules={[{ required: true, message: 'City is required!' }]}
                >
                  <Input placeholder="City*" className="py-2 my-1" />
                </Form.Item>

                <Form.Item
                  className=" col-md-4"
                  label="Zip/Post Code"
                  name="zip"
                >
                  <Input
                    placeholder="Zip/Post Code (optional)"
                    className="py-2 my-1"
                  />
                </Form.Item>

                <Form.Item
                  className=" col-md-4"
                  label="Country/Region"
                  name="country"
                  rules={[
                    { required: true, message: 'Country/Region is required!' },
                  ]}
                >
                  <Input placeholder="Country/Region*" className="py-2 my-1" />
                </Form.Item>
              </div>

              <button type="submit" className="fs-6 header-btn mt-2">
                Submit Booking Information
              </button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingResults;
