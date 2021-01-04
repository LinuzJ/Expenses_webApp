// components/Layout.js

import NavBar from "./NavBar";
import Flex from "@chakra-ui/react";
import navButtons from "../config/buttons";

const Layout = (props) => {
  return (
    <div className="Layout">
      <NavBar navButtons={navButtons} />
      <div className="Content">{props.children}</div>

      <div>
        <title>Expenses</title>
      </div>
    </div>
  );
};

export default Layout;
