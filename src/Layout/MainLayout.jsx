import { Outlet } from "react-router-dom";
import NavList from "../Components/Navbar/NavList";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavList></NavList>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
