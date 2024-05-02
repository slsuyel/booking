import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Checkbox } from "antd";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Log values after submission
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form fields
    setUsername("");
    setPassword("");
  };

  return (
    <div className="row mx-auto font-maven regi-page">
      <div className="col-md-4 mx-auto my-5">
        <div className="p-3 w-100 mx-auto border-0 card  shadow-lg text-info-emphasis">
          <div className="text-center">
            {/* <img
              style={{ height: 80 }}
              src="https://cdn.pixabay.com/photo/2018/08/20/17/04/wedding-3619423_1280.png"
              alt="Logo"
            /> */}
            <h3 className="control-label mt-3">Sign in or create an account</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="loginUsername">
                Mobile Or Email
              </label>
              <Input
                id="loginUsername"
                placeholder="Enter Mobile Or Email"
                style={{ height: 45 }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="loginPassword">
                Password
              </label>
              <Input.Password
                id="loginPassword"
                placeholder="Enter Password"
                style={{ height: 45 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="form-group">
                <Checkbox>Remember me</Checkbox>
              </div>
              <div>
                <Link to={"reset"}> Reset password</Link>
              </div>
            </div>
            <div className="form-group">
              <Button type="primary" htmlType="submit" className="w-100">
                Login
              </Button>
            </div>
          </form>
          <hr />
          <div className="text-center">
            New? <Link to="/register">Sign Up Free </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
