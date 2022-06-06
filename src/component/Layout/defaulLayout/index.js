import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: 50 }}>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
