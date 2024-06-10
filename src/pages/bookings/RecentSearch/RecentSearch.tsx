import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RecentSearch = () => {
  const defaultRecentSearches = [
    {
      location: 'New York',
      dates: ['May 4', 'May 5'],
      people: 2,
    },
    {
      location: 'Dhaka',
      dates: ['May 4', 'May 5'],
      people: 2,
    },
    {
      location: "Cox's Bazar",
      dates: ['May 4', 'May 5'],
      people: 2,
    },
  ];

  const [recentSearches, setRecentSearches] = useState(defaultRecentSearches);

  useEffect(() => {
    const savedRecentSearches = localStorage.getItem('recentSearches');
    if (savedRecentSearches) {
      setRecentSearches(JSON.parse(savedRecentSearches));
    }
  }, []);

  return (
    <div
      className="container mx-auto my-3 pb-5 px-2 py-3 rounded-5 row w-100"
      style={{ background: '#e8f2ff' }}
    >
      <h6 className="fs-3 fw-medium mt-3">Your recent searches</h6>

      {recentSearches.slice(0, 4).map((search, index) => {
        const params = new URLSearchParams({
          location: search.location,
          adults: search.people.toString(),
          children: '0',
          rooms: '1',
          addCar: 'false',
          checkIn: search.dates[0],
          checkOut: search.dates[1],
        }).toString();

        return (
          <div className="col-md-3 my-2" key={index}>
            <div className="card p-2 rounded-4 shadow">
              <Link
                className="align-items-center d-flex justify-content-between text-decoration-none "
                to={`/hotel-search?${params}`}
              >
                <img
                  src={`https://cf.bstatic.com/xdata/images/city/64x64/977437.jpg?k=0e8e510a113c319717b54edcbd3df2b5e2cf190e403973548745a10a2c19e660&o=`}
                  alt={search.location}
                  className="img-fluid rounded-circle"
                />
                <div className="text-secondary">
                  <p className="mb-0 fs-6">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="ms-2">{search.location}</span>
                  </p>
                  <p className="mb-0 fs-6">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span className="ms-2">{search.dates.join('-')}</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentSearch;
