import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Login, {loader as loginLoader} from "./pages/Login";
import Vans, {loader as vansLoader} from "./pages/vans/Vans";
import VanDetails, {loader as vanDetailsLoader} from "./pages/vans/VanDetails";
import AuthRequired, {loader as authRequiredLoader} from "./components/AuthRequired";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans, {loader as hostVansLoader} from "./pages/host/HostVans";
import HostVanDetails, {loader as hostVanDetailsLoader} from "./pages/host/HostVanDetails";
import Details from "./pages/host/Details";
import Pricing from "./pages/host/Pricing";
import Photos from "./pages/host/Photos";
import ErrorElement from "./components/ErrorElement";

import "../src/server"

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NotFound />
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />,
        loader: loginLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
        loader: vanDetailsLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "",
        element: <AuthRequired />,
        loader: authRequiredLoader,
        errorElement: <ErrorElement />,
        children: [
          {
            path: "host/:hostId",
            element: <HostLayout />,
            children: [
              {
                path: "",
                element: <Dashboard />,
              },
              {
                path: "income",
                element: <Income />,
              },
              {
                path: "reviews",
                element: <Reviews />,
              },
              {
                path: "vans",
                element: <HostVans />,
                loader: hostVansLoader,
                errorElement: <ErrorElement />,
              },
              {
                path: "vans/:id",
                element: <HostVanDetails />,
                loader: hostVanDetailsLoader,
                errorElement: <ErrorElement />,
                children: [
                  {
                    path: "",
                    element: <Details />,
                  },
                  {
                    path: "pricing",
                    element: <Pricing />,
                  },
                  {
                    path: "photos",
                    element: <Photos />,
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}