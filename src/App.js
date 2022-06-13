import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./Routes";
import DefaultLayout from "./component/Layout/defaulLayout";
import "./AppStyles.scss";
import Loading from "./component/loading/Loading";
function App() {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 1000);
  return (
    <Router>
      <div id="loading" style={{ display: "flex" }}>
        <Loading className="img" />
      </div>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
