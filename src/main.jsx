import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import Mythos from './pages/mythos.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';

// Define the routes
const router = createBrowserRouter([
  {
    path: '/storyGenerator/',
    element: <App />,
    children: [
      {
        index: true, // Default route for '/storyGenerator/'
        element: <Home />,
      },
      {
        path: 'mythos', // Relative path for child route
        element: <Mythos />,
      },
      {
        path: 'contact', // Relative path for child route
        element: <Contact />,
      },
      {
        path: 'about', // Relative path for child route
        element: <About />,
      },
    ],
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
