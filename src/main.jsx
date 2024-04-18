import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import ErrorPAge from './components/ErrorPage/ErrorPAge.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPAge></ErrorPAge>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: async () => {
          const reponse = await fetch('https://bitbucket.org/meheraz/career-hub-json-data/raw/e05e90d65dc3dcd26023180dbb6e0e926ba5eea1/jobs.json') // do not load all data. load only what you need.
          const data = await reponse.json()
          return data;
        }
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: async () => {
          const reponse = await fetch('https://bitbucket.org/meheraz/career-hub-json-data/raw/e05e90d65dc3dcd26023180dbb6e0e926ba5eea1/jobs.json') // do not load all data. load only what you need.
          const data = await reponse.json()
          return data;
        }
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
