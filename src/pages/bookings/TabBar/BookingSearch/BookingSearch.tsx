import { useState } from "react";
import { DatePicker, Input, Button, Checkbox, InputNumber } from "antd";

const BookingSearch = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  return (
    <div className="">
      <div className="bg-info-subtle mx-auto py-5 rounded row shadow-sm">
        <div className="col-md-4 my-1">
          <div className="position-relative ">
            <Input className="p-2 px-3" placeholder="New York" />
            <i className="fa-solid fa-bed bed-icon"></i>
          </div>
        </div>
        <div className="col-md-3 my-1">
          <DatePicker.RangePicker
            disabledDate={(current) => {
              return current && current.valueOf() <= Date.now();
            }}
            className="p-2 px-3"
          />
        </div>
        <div className="col-md-3 my-1 position-relative">
          <Button
            size="large"
            type="primary"
            className="ant-btn-lg ant-btn-primary ant-input ant-input-outlined css-dev-only-do-not-override-kghr11 text-secondary toggle-btn-child-adult"
            onClick={toggleSection}
          >
            1 adult · 0 children · 1 room{" "}
            <i className="fa-solid fa-person ms-2"></i>
          </Button>
          {isSectionOpen && (
            <div
              className="card p-3 mt-2 position-absolute w-100"
              style={{ zIndex: "200", top: "calc(60% + 10px)", left: "0" }}
            >
              <InputNumber
                defaultValue={0}
                min={0}
                style={{ width: "100%", marginBottom: "8px" }}
                addonBefore="Adults"
              />
              <InputNumber
                defaultValue={0}
                min={0}
                style={{ width: "100%", marginBottom: "8px" }}
                addonBefore="Children"
              />
              <InputNumber
                defaultValue={0}
                min={0}
                style={{ width: "100%" }}
                addonBefore="Rooms"
              />
            </div>
          )}
        </div>
        <div className="col-md-2 my-1">
          <Button size="large" type="primary" className="w-100">
            Search
          </Button>
        </div>
        <div className=" my-1">
          <Checkbox>I'm looking for an entire home or apartment</Checkbox>
        </div>
      </div>
    </div>
  );
};

export default BookingSearch;
