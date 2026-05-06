import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <NavBar />
      Body
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
