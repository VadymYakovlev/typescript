/* eslint-disable react-refresh/only-export-components */
// * Base
import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// * Components
import Element from './components/Elements/Elements';
import App from './App';

// * Pages
const Contacts = lazy(() => import('./pages/Contacts/Contacts')),
  Home = lazy(() => import('./pages/Home/Home')),
  About = lazy(() => import('./pages/About/About'));

// * Element
// const Element = ({ component }: { component: ReactNode } ) => {
//   return <Suspense fallback={<Loading />}>{component}</Suspense>;
// };

// * Routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Element component={<App />} />,
    children: [
      {
        path: '/',
        element: <Element component={<Home />} />,
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
      },
      {
        path: '/contacts',
        element: <Element component={<Contacts />} />,
      },
    ],
  },
]);

export default routes;
