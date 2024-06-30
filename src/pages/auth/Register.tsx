import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Checkbox } from 'antd';

const Register = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Log values after submission
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div
      className="row mx-auto regi-page"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="col-md-4 mx-auto my-5">
        <div className="border-0 card mx-auto p-3 py-5 shadow-lg text-info-emphasis w-100">
          <div className="text-center">
            <h3 className="control-label mt-3">Sign Up for an Account</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="registerFullName">
                Full Name
              </label>
              <Input
                id="registerFullName"
                placeholder="Enter Full Name"
                style={{ height: 45 }}
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="registerEmail">
                Email
              </label>
              <Input
                id="registerEmail"
                placeholder="Enter Email"
                style={{ height: 45 }}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="registerPassword">
                Password
              </label>
              <Input.Password
                id="registerPassword"
                placeholder="Enter Password"
                style={{ height: 45 }}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <Checkbox>I agree to the terms and conditions</Checkbox>
            </div>
            <div className="form-group">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="w-100"
              >
                Register
              </Button>
            </div>
          </form>
          <hr />
          <div className="text-center">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
