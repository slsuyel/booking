import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Errorpage from '../components/ui/Errorpage';
import Login from './../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/Home/Home';
import SearchResult from '../pages/bookings/SearchResult/SearchResult';

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
        path: '/register',
        element: <Register />,
      },
      {
        path: '/hotel-search',
        element: <SearchResult />,
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
