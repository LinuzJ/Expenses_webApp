import { CloseButton } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

const DeleteButton = (props) => {
  const id = { id: props.rowData };

  const handleClick = () => {
    fetch("http://localhost:3000/api/delete", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(id),
    }).then((result) => {
      const newResult = result.ok ? console.log("hey") : console.log("ney");
    });
  };
  return <CloseButton onClick={handleClick}></CloseButton>;
};

export default DeleteButton;
