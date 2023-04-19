import { Center, Loader } from "@mantine/core";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "~/layout/Layout";
import NotFound from "~/page/404/Index";
import Card from "~/page/Card/Index";
import Chart from "~/page/Chart/Index";
import Dashboard from "~/page/Dashboard/Index";
import Error from "~/page/Error/Error";
import ForgetPassword from "~/page/ForgetPassword/Index";
import Login from "~/page/Login/Index";
import Profile from "~/page/Profile/Index";
import TabProfile from "~/page/Profile/Tabs/Index";
import Table from "~/page/Table/Index";

// const Dashboard = lazy(() => import("~/page/Dashboard/Index"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      <Layout />
      // </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: ":tabValue",
            element: <TabProfile />,
          },
        ],
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      // {
      //   path: '*',
      //   element: <NotFound />,
      // },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
    errorElement: <Error />,
  },
  // { path: '/register', element: <Register /> },
  { path: "*", element: <NotFound />, errorElement: <Error /> },
]);

const ProviderRouter = () => {
  return (
    <Suspense
      fallback={
        <Center w="100vw" h="100vh">
          <Loader size="xl" />
        </Center>
      }
    >
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </Suspense>
  );
};

export default ProviderRouter;
