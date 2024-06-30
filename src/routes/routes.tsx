import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Errorpage from '../components/ui/Errorpage';
import Login from './../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/Home/Home';
import SearchResult from '../pages/bookings/SearchResult/SearchResult';
import EclipseSection from '../pages/Home/EclipseSection/EclipseSection';
import Scroll from '../components/ui/Scroll/Scroll';
import Particle from '../components/ui/Particle/Particle';

import SingleTab from '../pages/bookings/TabBar/SingleTab';

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
        path: '/particle',
        element: <Particle />,
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
        path: '/scroll',
        element: <Scroll />,
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
