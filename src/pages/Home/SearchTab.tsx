import { useState } from 'react';
// import BundleSaveTab from './Tabs/BundleSaveTab';
import CarsTab from './Tabs/CarsTab';
import CruisesTab from './Tabs/CruisesTab';
import FlightsTab from './Tabs/FlightsTab';
import HotelsTab from './Tabs/HotelsTab';

const SearchTab = () => {
  const [activeTab, setActiveTab] = useState('hotels');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hotels':
        return <HotelsTab />;
      case 'flights':
        return <FlightsTab />;
      // case 'bundleSave':
      //   return <BundleSaveTab />;
      case 'cars':
        return <CarsTab />;
      case 'cruises':
        return <CruisesTab />;
      default:
        return <HotelsTab />;
    }
  };

  return (
    <div className="col-md-7 search_card mx-auto mb-auto py-3">
      <div className="d-flex flex-wrap gap-2 my-2 justify-content-around">
        <button
          className={`item_tab_btn ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          <i className="pe-2 fas fa-hotel"></i> Hotels
        </button>
        <button
          className={`item_tab_btn ${activeTab === 'flights' ? 'active' : ''}`}
          onClick={() => setActiveTab('flights')}
        >
          <i className="pe-2 fas fa-plane"></i> Flights
        </button>

        <button
          className={`item_tab_btn ${activeTab === 'cars' ? 'active' : ''}`}
          onClick={() => setActiveTab('cars')}
        >
          <i className="pe-2 fas fa-car"></i> Cars
        </button>
        <button
          className={`item_tab_btn ${activeTab === 'cruises' ? 'active' : ''}`}
          onClick={() => setActiveTab('cruises')}
        >
          <i className="pe-2 fas fa-ship"></i> Cruises
        </button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default SearchTab;
