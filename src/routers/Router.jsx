import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// pages
import Map from "../pages/map";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Map /> }],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
