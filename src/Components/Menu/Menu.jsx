import {NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="navbar my-4">
        <div className="flex-1">
          <img src="https://i.ibb.co/4P9mPb3/Logo.png" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/donation">Donation</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
