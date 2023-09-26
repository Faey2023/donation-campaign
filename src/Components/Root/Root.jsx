import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

const Root = () => {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto">
        <Menu></Menu>
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
