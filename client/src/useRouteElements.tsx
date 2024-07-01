/* eslint-disable react-refresh/only-export-components */
import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import PATH from "./constants/path.constant";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";

const Home = lazy(() => import("./pages/Home/Home"));
const ProjectDetails = lazy(
  () => import("./pages/ProjectDetails/ProjectDetails")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      children: [
        {
          path: PATH.home,
          element: (
            <HomeLayout>
              <Suspense fallback={<Spin />}>
                <Home />
              </Suspense>
            </HomeLayout>
          ),
        },
        {
          path: PATH.projectDetails,
          element: (
            <HomeLayout>
              <Suspense fallback={<Spin />}>
                <ProjectDetails />
              </Suspense>
            </HomeLayout>
          ),
        },
        {
          path: "*",
          element: (
            <HomeLayout>
              <Suspense fallback={<Spin />}>
                <NotFound />
              </Suspense>
            </HomeLayout>
          ),
        },
      ],
    },
  ]);

  return routeElements;
}
