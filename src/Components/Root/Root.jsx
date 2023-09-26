import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

const Root = () => {
  return (
    <div>
      <div>
        <Menu></Menu>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
