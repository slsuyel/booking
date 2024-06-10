import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import logo from '../../assets/icons/googlelogin.svg';

interface FormValues {
  email: string;
  password: string;
  retypePassword: string;
}

const Register = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const onFinish = (values: FormValues) => {
    console.log('Received values:', values);
  };

  // Function to handle Google login
  const handleGoogleLogin = () => {
    // Implement Google OAuth logic here
    console.log('Login with Google clicked');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 card shadow-lg">
          <Form form={form} onFinish={onFinish} layout="vertical">
            <h3 className="control-label text-center text-info-emphasis my-3">
              Sign in or create an account
            </h3>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                {
                  type: 'email',
                  message: 'Please enter a valid email address!',
                },
              ]}
            >
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </Form.Item>
            <Form.Item
              label="Retype Password"
              name="retypePassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please retype your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('The two passwords do not match!')
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                value={retypePassword}
                onChange={e => setRetypePassword(e.target.value)}
                placeholder="Retype your password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Register
              </Button>
            </Form.Item>

            <Form.Item className="text-center">
              <img
                draggable={false}
                className="handleGoogleLogin"
                src={logo}
                onClick={handleGoogleLogin}
                alt="handleGoogleLogin"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
