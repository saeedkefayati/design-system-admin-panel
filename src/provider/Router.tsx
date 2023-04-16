import { Center, Loader } from "@mantine/core";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "~/layout/Layout";
import Chart from "~/page/Chart/Index";
import Error from "~/page/Error/Error";

const Dashboard = lazy(() => import("~/page/Dashboard/Index"));
const NotFound = lazy(() => import("~/page/404/Index"));
const Login = lazy(() => import("~/page/Login/Index"));
const ForgetPassword = lazy(() => import("~/page/ForgetPassword/Index"));

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
