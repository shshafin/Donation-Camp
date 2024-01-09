import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavList = () => {
  return (
    <div>
      <nav className="   py-4 mx-auto text-white  ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={`/`}>
            <Logo></Logo>
          </Link>

          <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-bold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline underline-offset-8"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline underline-offset-8"
                  : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline underline-offset-8"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavList;
