import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

const Root = () => {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
