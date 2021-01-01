import Link from "next/link";
import Layout from "../components/layout";
import { Container, Box, Button, Input, Stack, Select } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function add() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:3000/api/addToExpenses", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
  };

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
          type="number"
          placeholder="Enter amount"
          name="amount"
          ref={register({
            required: "You have to enter an amount!",
          })}
        />
        {errors.amount && <p>{errors.amount.message}</p>}
        <input type="submit" />
      </form>
    </Layout>
  );
}
