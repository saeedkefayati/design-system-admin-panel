import { Center, Loader } from "@mantine/core";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SalamtNewsLogo from "~/components/core/SalamtNewsLogo";
import Layout from "~/layout/Layout";
import NotFoundPage from "~/page/404/Index";
import CreateBlogPage from "~/page/Blog/Create";
import EditBlogPage from "~/page/Blog/Edit";
import Error from "~/page/Error/Error";

const CardPage = lazy(() => import("~/page/Card/Index"));
const ChartPage = lazy(() => import("~/page/Chart/Index"));
const DashboardPage = lazy(() => import("~/page/Dashboard/Index"));
const ForgetPasswordPage = lazy(() => import("~/page/ForgetPassword/Index"));
const LoginPage = lazy(() => import("~/page/Login/Index"));
const ProfilePage = lazy(() => import("~/page/Profile/Index"));
const TabProfile = lazy(() => import("~/page/Profile/Tabs/Index"));
const TablePage = lazy(() => import("~/page/Table/Index"));
const BlogPage = lazy(() => import("~/page/Blog/Index"));
const LockPage = lazy(() => import("~/page/Lock/Index"));

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
        element: <DashboardPage />,
      },
      {
        path: "/chart",
        element: <ChartPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          {
            path: ":tabValue",
            element: <TabProfile />,
          },
        ],
      },
      {
        path: "/table",
        element: <TablePage />,
      },
      {
        path: "/card",
        element: <CardPage />,
      },
      {
        path: "/blog",
        children: [
          {
            index: true,
            element: <BlogPage />,
          },
          {
            path: "create",
            element: <CreateBlogPage />,
          },
          {
            path: ":slug",
            element: <EditBlogPage />,
          },
        ],
      },
      // {
      //   path: '*',
      //   element: <NotFound />,
      // },
    ],
  },
  { path: "/login", element: <LoginPage />, errorElement: <Error /> },
  {
    path: "/forget-password",
    element: <ForgetPasswordPage />,
    errorElement: <Error />,
  },
  // { path: '/register', element: <Register /> },
  { path: "/lock", element: <LockPage />, errorElement: <Error /> },
  { path: "*", element: <NotFoundPage />, errorElement: <Error /> },
]);

const ProviderRouter = () => {
  return (
    <Suspense
      fallback={
        <Center w="100vw" h="100vh">
          {/* <TypoLogo /> */}
          <SalamtNewsLogo />
        </Center>
      }
    >
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </Suspense>
  );
};

export default ProviderRouter;
