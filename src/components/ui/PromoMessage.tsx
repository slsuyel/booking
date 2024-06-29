import { useState } from 'react';
import { Alert, Button } from 'antd';

const PromoMessage = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className=" container">
      {visible && (
        <Alert
          className="rounded-0 border-0 promo-message"
          description=<div className="text-center text-white">
            <span className="fs-5 fw-bold me-2">AMERICA'S CRUISE SALE:</span>{' '}
            Set sail from $43/night & up to $2,000 to spend at sea{' '}
          </div>
          type="info"
          onClose={handleClose}
          action={
            <Button
              className="bg-danger text-white"
              size="small"
              type="text"
              onClick={handleClose}
            >
              Close
            </Button>
          }
        />
      )}
    </div>
  );
};

export default PromoMessage;
