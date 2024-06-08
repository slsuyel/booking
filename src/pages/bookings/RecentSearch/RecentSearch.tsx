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
    <div className="row mx-auto my-3 w-100 ">
      <h6 className="fs-3 fw-medium mt-3">Your recent searches</h6>

      {recentSearches.map((search, index) => {
        // Construct params string outside of the JSX
        const params = new URLSearchParams({
          location: search.location,
          adults: search.people.toString(), // Assuming 'people' refers to adults here
          children: '0', // Assuming no children in recent searches
          rooms: '1', // Assuming 1 room for simplicity
          addCar: 'false', // Default to false
          checkIn: search.dates[0], // Assuming the first date in 'dates' is check-in
          checkOut: search.dates[1], // Assuming the second date in 'dates' is check-out
        }).toString();

        return (
          <div className="col-md-4 my-2" key={index}>
            <div className="card shadow p-2 ">
              <Link
                className="align-items-center d-flex justify-content-between text-decoration-none "
                to={`/hotel-search?${params}`}
              >
                <img
                  src={`https://cf.bstatic.com/xdata/images/city/64x64/977437.jpg?k=0e8e510a113c319717b54edcbd3df2b5e2cf190e403973548745a10a2c19e660&o=`}
                  alt={search.location}
                  className="img-fluid"
                />
                <div className="text-secondary">
                  <p className="mb-0">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="ms-2">{search.location}</span>
                  </p>
                  <p className="mb-0">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span className="ms-2">{search.dates.join('-')}</span>
                  </p>
                  <p className="mb-0">
                    <i className="fa-solid fa-users-line"></i>
                    <span className="ms-2">{search.people} people</span>
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
