import Link from "next/link";
import { withRouter } from "next/router";
import { Button, ButtonGroup } from "@chakra-ui/react";

const NavButton = (props) => {
  let backgroundColor = props.router.pathname === props.path ? "blue" : "black";

  return (
    <Link href={props.path}>
      <Button
        className={`NavButton ${
          props.router.pathname === props.path ? "active" : ""
        }`}
        style={{
          // display: "flex",
          // flexDirection: "row",
          // justifyContent: "space-around",
          // alignItems: "center",

          // height: "100%",
          background: backgroundColor,
        }}
      >
        {props.label}
      </Button>
    </Link>
  );
};

export default withRouter(NavButton);
