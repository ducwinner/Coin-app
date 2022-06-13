import CoinDetail from "../pages/CoinDetail";
import Fortfolio from "../pages/Fortfolio";
import Home from "../pages/Home";
import News from "../pages/News";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/new", component: News },
  { path: "/coin-detail/:id", component: CoinDetail },
  { path: "/fortfolio", component: Fortfolio },
];

const privateRouter = [];
export { publicRouter, privateRouter };
