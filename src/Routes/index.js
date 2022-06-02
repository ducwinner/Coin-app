import Home from "../pages/Home";
import News from "../pages/News";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/new", component: News },
];

const privateRouter = [];
export { publicRouter, privateRouter };
