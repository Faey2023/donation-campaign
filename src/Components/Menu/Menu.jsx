import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="navbar my-4">
        <div className="flex-1">
          <img src="https://i.ibb.co/4P9mPb3/Logo.png" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
