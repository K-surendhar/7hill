import Home from "views/app/pages/home";
import About from "views/app/pages/about";
import Dealers from "views/app/pages/dealers";
import HomeFurniture from "views/app/pages/homeFurniture";
import InstitutionalFurniture from "views/app/pages/institutionalFurniture";
import OfficeTables from "views/app/pages/officeTables";
import Products from "views/app/pages/products";

export const routeData = [
  {
    "path": "/",
    "element": <Home />,
  },
  {
    "path": "/about",
    "element": <About />,
  },
  {
    "path": "/dealers",
    "element": <Dealers />,
  },
  {
    "path": "/home-furniture",
    "element": <HomeFurniture />,
  },
  {
    "path": "/institutional-furniture",
    "element": <InstitutionalFurniture />,
  },
  {
    "path": "/institutional-furniture/office-tables",
    "element": <OfficeTables />,
  },
  {
    "path": "/home-furniture/products",
    "element": <Products />,
  }
];