import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

interface ErrorpageProps {
  status: ResultStatusType;
}

const Errorpage: React.FC<ErrorpageProps> = ({ status }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const error = useRouteError() as { statusText?: string; message?: string }; // Type assertion

  console.error(error);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Result
            status={status}
            title={status}
            subTitle={
              <>
                <p>Sorry, an unexpected error has occurred.</p>
                <i>{error.statusText || error.message}</i>
              </>
            }
            extra={
              <Button type="primary" onClick={handleGoBack}>
                Back Home
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
