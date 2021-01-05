import Link from "next/link";
import { withRouter } from "next/router";
import { Button, ButtonGroup } from "@chakra-ui/react";

const NavButton = (props) => {
  let backgroundColor =
    props.router.pathname === props.path ? "#ffffe1" : " #ffffa3";

  return (
    <Link href={props.path}>
      <Button
        className={`NavButton ${
          props.router.pathname === props.path ? "active" : ""
        }`}
        style={{
          background: backgroundColor,
          color: "black",
        }}
      >
        {props.label}
      </Button>
    </Link>
  );
};

export default withRouter(NavButton);
