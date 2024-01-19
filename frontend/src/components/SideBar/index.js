import { Fragment } from "react";

import SideBarMobile from "./mobile";
import SideBarLaptop from "./laptop";


const SideBar = () => {
  return (
    <Fragment>
      <SideBarMobile />
      <SideBarLaptop />

    </Fragment>
  );
};


export default SideBar;