import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ErrorPage from "./routes/ErrorPage.jsx";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Homepage, Contacts, Price, About, ServicePererabotka, ServiceTransport, ServiceExpedition, Postavchiki, ForClients, ForWorkers } from './routes/index.js';
import Policy from './routes/Policy.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Homepage />
      </App>
    ),
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
  },
  {
    path: "/about",
    element: (
      <App>
        <About />
      </App>
    ),
  },
  {
    path: "/price",
    element: (
      <App>
        <Price />
      </App>
    ),
  },
  {
    path: "/contacts",
    element: (
      <App>
        <Contacts />
      </App>
    ),
  },

  {
    path: "/service_pererabotka",
    element: (
      <App>
        <ServicePererabotka />
      </App>
    ),
  },

  {
    path: "/service_transport",
    element: (
      <App>
        <ServiceTransport />
      </App>
    ),
  },

  {
    path: "/service_expedition",
    element: (
      <App>
        <ServiceExpedition />
      </App>
    ),
  },

  {
    path: "/postavchiki",
    element: (
      <App>
        <Postavchiki />
      </App>
    ),
  },

  {
    path: "/for_clients",
    element: (
      <App>
        <ForClients />
      </App>
    ),
  },

  {
    path: "/for_workers",
    element: (
      <App>
        <ForWorkers />
      </App>
    ),
  },
  {
    path: "/policy",
    element: (
      <App>
        <Policy />
      </App>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
