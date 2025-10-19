import LandingPage from "../landingPage/LandingPage";
import Footer from "./Footer";
import Header from "./Header";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {},
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
};

export default Body;
