import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
  return (
    <div style={{}}>
      <Header />
      <div className="container" style={{ margin: 50 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
