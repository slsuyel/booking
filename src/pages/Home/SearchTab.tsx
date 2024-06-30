import { useState } from 'react';
import BundleSaveTab from './Tabs/BundleSaveTab';
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
      case 'bundle_save':
        return <BundleSaveTab />;
      case 'cars':
        return <CarsTab />;
      case 'cruises':
        return <CruisesTab />;
      default:
        return <HotelsTab />;
    }
  };

  return (
    <div className="col-md-7 search_card mx-auto mb-auto  pt-4 ">
      <div className="d-flex gap-1 my-2 justify-content-around">
        <button
          className={`align-items-center d-flex item_tab_btn ${
            activeTab === 'hotels' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('hotels')}
        >
          <i className="d-none d-sm-block pe-2 fas fa-hotel"></i> Hotels
        </button>
        <button
          className={`align-items-center d-flex item_tab_btn ${
            activeTab === 'flights' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('flights')}
        >
          <i className="d-none d-sm-block pe-2 fas fa-plane"></i> Flights
        </button>
        <button
          className={`align-items-center d-flex item_tab_btn ${
            activeTab === 'bundle_save' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('bundle_save')}
        >
          <i className="d-none d-sm-block pe-2 fa-solid fa-suitcase-rolling"></i>{' '}
          Bundle & Save
        </button>

        <button
          className={`align-items-center d-flex item_tab_btn ${
            activeTab === 'cars' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('cars')}
        >
          <i className="d-none d-sm-block pe-2 fas fa-car"></i> Cars
        </button>
        <button
          className={`align-items-center d-flex item_tab_btn ${
            activeTab === 'cruises' ? 'active' : ''
          }`}
          onClick={() => setActiveTab('cruises')}
        >
          <i className="d-none d-sm-block pe-2 fas fa-ship"></i> Cruises
        </button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default SearchTab;
