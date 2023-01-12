import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeData } from "../data/routeData.js";
import { Loader } from "./Loader.jsx";
// const Home = lazy(() => import("views/app/pages/home"));
// const About = lazy(() => import("views/app/pages/about"));
// const Dealers = lazy(() => import("views/app/pages/dealers"));
// const HomeFurniture = lazy(() => import("views/app/pages/homeFurniture"));
// const InstitutionalFurniture = lazy(() =>
//   import("views/app/pages/institutionalFurniture")
// );
// const OfficeTables = lazy(() => import("views/app/pages/officeTables"));
// const Products = lazy(() => import("views/app/pages/products"));

const CustomRoute = () => {
  return (
    <Routes>
      {routeData.map(({ path, element }, i) => {
        return (
          <Route
            key={i}
            path={path}
            element={<Suspense fallback={<Loader />}>{element}</Suspense>}
          />
        );
      })}
    </Routes>
  );
};

export default CustomRoute;
