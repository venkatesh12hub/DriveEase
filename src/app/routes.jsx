import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Cars from '@/pages/Cars';
import CarDetails from '@/pages/CarDetails';
import Booking from '@/pages/Booking';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

/**
 * Centralized Application Routes definition.
 * All core pages are wrapped in the global Layout component.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cars',
        element: <Cars />,
      },
      {
        path: 'cars/:id',
        element: <CarDetails />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
],
{
  basename: '/DriveEase'
}
);

export default router;
