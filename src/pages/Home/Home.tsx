import BookingSearch from "../bookings/BookingSearch/BookingSearch";

const Home = () => {
  return (
    <div className="container ">
      <div className="mt-4">
        <h1 className="booking-search-title">Find your next stay</h1>
        <p className="booking-search-subtitle">
          Search deals on hotels, homes, and much more...
        </p>
      </div>

      <BookingSearch />
    </div>
  );
};

export default Home;
