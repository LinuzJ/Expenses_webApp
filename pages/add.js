import Link from "next/link";
import Layout from "../components/layout";
import { Container, Box, Button, Input, Stack, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertMessageSuccess from "../components/AlertMessage";
import AlertMessageFail from "../components/AlertMessageFail";

export default function add() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:3000/api/addToExpenses", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }).then((result) => {
      const newResult = result.ok ? (
        <AlertMessageSuccess
          resultChanger={setResultOfPost}
        ></AlertMessageSuccess>
      ) : (
        <AlertMessageFail resultChanger={setResultOfPost}></AlertMessageFail>
      );
      setResultOfPost(newResult);
    });
  };

  const [resultOfPost, setResultOfPost] = useState("");

  return (
    <Layout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        margin="auto"
        width="70%"
        border="black"
        p="20px"
      >
        <Select
          placeholder="Select payer"
          type="text"
          name="user"
          ref={register({ required: true })}
        >
          <option value="Calle">Calle</option>
          <option value="Linus">Linus</option>
        </Select>
        <input
          type="text"
          placeholder="Description"
          name="what"
          ref={register({
            required: "Tell what the expense is!",
          })}
        />
        <input
          type="number"
          placeholder="Enter amount"
          name="amount"
          ref={register({
            required: "You have to enter an amount!",
          })}
        />
        {resultOfPost !== "" && resultOfPost}
        {errors.amount && <p>{errors.amount.message}</p>}
        {errors.what && <p>{errors.what.message}</p>}

        <input type="submit" />
      </form>
    </Layout>
  );
}
