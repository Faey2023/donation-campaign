import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import Root from "../Root/Root";
import CardDetail from "../Cards/CardDetail";
// import Banner from "../Banner/Banner";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      // {
      //   path: "/",
      //   element: <Banner></Banner>,
      //   loader: () => fetch("/public/data.json"),
      // },
      {
        path: "/card/:id",
        element: <CardDetail></CardDetail>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default MyRouter;
