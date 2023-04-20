import { Center, Loader } from "@mantine/core";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "~/layout/Layout";
import NotFound from "~/page/404/Index";
import Error from "~/page/Error/Error";

const Card = lazy(() => import("~/page/Card/Index"));
const Chart = lazy(() => import("~/page/Chart/Index"));
const Dashboard = lazy(() => import("~/page/Dashboard/Index"));
const ForgetPassword = lazy(() => import("~/page/ForgetPassword/Index"));
const Login = lazy(() => import("~/page/Login/Index"));
const Profile = lazy(() => import("~/page/Profile/Index"));
const TabProfile = lazy(() => import("~/page/Profile/Tabs/Index"));
const Table = lazy(() => import("~/page/Table/Index"));

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
