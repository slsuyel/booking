import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Errorpage from '../components/ui/Errorpage';
import Login from './../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/Home/Home';
import SearchResult from '../pages/bookings/SearchResult/SearchResult';
import EclipseSection from '../pages/Home/EclipseSection/EclipseSection';
import Scroll from '../components/ui/Scroll/Scroll';

import SingleTab from '../pages/bookings/TabBar/SingleTab';
import TimeCardScroll from '../components/ui/TimeCardScroll/TimeCardScroll';
import HeroAnimationSlider from '../components/ui/HeroAnimationSlider/HeroAnimationSlider';
import BookingResults from '../pages/bookings/BookingSearch/BookingResults';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Errorpage status={403} />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/booking-results',
        element: <BookingResults />,
      },

      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/hotel-search',
        element: <SearchResult />,
      },
      {
        path: '/else',
        element: <EclipseSection />,
      },
      {
        path: '/time',
        element: <TimeCardScroll />,
      },

      {
        path: '/scroll',
        element: <Scroll />,
      },
      {
        path: '/hero',
        element: <HeroAnimationSlider />,
      },
      {
        path: '/b/:service',
        element: <SingleTab />,
      },
    ],
  },

  // {
  //   path: "user",
  //   element: (
  //     <UserPrivate>
  //       <UserLoggedLayout />
  //     </UserPrivate>
  //   ),
  //   errorElement: <Errorpage />,
  //   children: [
  //     {
  //       path: "profile",
  //       element: <UserDashboard />,
  //     },

  // {
  //   path: "/dashboard",
  //   element: <App />,
  //   children: routeGenerator(userPaths),
  // },
]);

export default router;
