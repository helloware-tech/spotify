import Menu from "../Menu";

import "./style.css";

const Layout = ({ children }) => {
  return (
    <section className="d-flex w-100 h-100">
      <Menu />
      <div className="main" style={{ backgroundColor: "yellow" }}>
        {children}
      </div>
    </section>
  );
};

export default Layout;
