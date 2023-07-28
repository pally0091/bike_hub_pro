/* eslint-disable react/no-unescaped-entities */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home/Home";
import Bikes from "./Components/Bikes/Bikes";
import Service from "./Components/Service/Service";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/bikes",
          element: <Bikes></Bikes>,
        },
        {
          path: "/service",
          element: <Service></Service>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
