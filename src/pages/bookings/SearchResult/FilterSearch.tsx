import { useEffect, useState } from "react";
import { Collapse, Checkbox, Slider } from "antd";
const { Panel } = Collapse;

const FilterSearch = () => {
  // State variables to store the values of checkboxes and slider
  const [budgetRange, setBudgetRange] = useState([500, 20000]);

  const [mealOptions, setMealOptions] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [facilityOptions, setFacilityOptions] = useState([]);
  const [pointOfInterestOptions, setPointOfInterestOptions] = useState([]);

  // State variables to track if "See More" is clicked for each category
  const [showAllMeals, setShowAllMeals] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const [showAllFacilities, setShowAllFacilities] = useState(false);
  const [showAllPointsOfInterest, setShowAllPointsOfInterest] = useState(false);

  // Function to log all state values
  useEffect(() => {
    console.log("Budget Range:", budgetRange);
    console.log("Meal Options:", mealOptions);
    console.log("Property Types:", propertyTypes);
    console.log("Facility Options:", facilityOptions);
    console.log("Points of Interest:", pointOfInterestOptions);
  }, [
    budgetRange,
    mealOptions,
    propertyTypes,
    facilityOptions,
    pointOfInterestOptions,
  ]);

  // Options for each category
  const mealList = ["Breakfast", "Half Board", "Full Board", "All-inclusive"];
  const propertyList = [
    "Hotels",
    "Hostels",
    "Apartments",
    "Guest houses",
    "Campgrounds",
  ];
  const facilityList = [
    "Free Internet",
    "Shuttle",
    "Parking",
    "Swimming Pool",
    "Gym",
    "Bar",
    "Conference Hall",
    "Spa Services",
    "Ski",
    "Beach",
    "Air Conditioning",
    "Bathtub",
    "Window In The Room",
    "Kitchen",
    "Terrace",
    "Kid Friendly",
    "Pets Allowed",
    "Wheelchair",
    "Transfer",
    "Fitness Center",
    "Bar Or Restaurant",
    "Spa Service",
    "Ski Slope Nearby",
    "Beach Nearby",
    "Air Condition",
    "Private Bathroom",
    "Window In Room",
    "Balcony",
    "Suitable For Children",
    "For Guests With Disabilities",
  ];
  const pointOfInterestList = [
    "The Institute of Culinary Education",
    "Flatiron Building",
    "Union Square",
    "Fashion Institute of Technology",
    "Gramercy Park",
    "Center for Jewish History",
    "Metropolitan Pavilion",
    "Rubin Museum of Art",
    "Forbes Galleries",
    "Chelsea Art Museum",
  ];

  return (
    <div className="mt-1">
      <h6 className="border border-dark-subtle mt-4 p-2 rounded">Filter by:</h6>

      <Collapse defaultActiveKey={["1", "2", "3", "4"]} className="mb-1 fs-6">
        <Panel header="Your budget (per night)" key="1">
          <span>
            BDT {budgetRange[0]} to {budgetRange[1]}{" "}
            {budgetRange[1] == 20000 ? "+" : ""}
          </span>
          <Slider
            range
            min={500}
            max={20000}
            defaultValue={[500, 20000]}
            onChange={setBudgetRange}
          />
        </Panel>
        <Panel header="Meal" key="2">
          <Checkbox.Group
            options={showAllMeals ? mealList : mealList.slice(0, 3)}
            onChange={setMealOptions}
          />
          <span
            onClick={() => setShowAllMeals(!showAllMeals)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {showAllMeals ? "See Less" : "See More"}
          </span>
        </Panel>
        <Panel header="Property Type" key="3">
          <Checkbox.Group
            options={
              showAllProperties ? propertyList : propertyList.slice(0, 3)
            }
            onChange={setPropertyTypes}
          />
          <span
            onClick={() => setShowAllProperties(!showAllProperties)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {showAllProperties ? "See Less" : "See More"}
          </span>
        </Panel>
        <Panel header="Facilities & Amenities" key="4">
          <Checkbox.Group
            options={
              showAllFacilities ? facilityList : facilityList.slice(0, 3)
            }
            onChange={setFacilityOptions}
          />
          <span
            onClick={() => setShowAllFacilities(!showAllFacilities)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {showAllFacilities ? "See Less" : "See More"}
          </span>
        </Panel>
        <Panel header="Point Of Interest" key="5">
          <Checkbox.Group
            options={
              showAllPointsOfInterest
                ? pointOfInterestList
                : pointOfInterestList.slice(0, 3)
            }
            onChange={setPointOfInterestOptions}
          />
          <span
            onClick={() => setShowAllPointsOfInterest(!showAllPointsOfInterest)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {showAllPointsOfInterest ? "See Less" : "See More"}
          </span>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FilterSearch;
