import Link from "next/link";
import Layout from "../components/layout";
import {
  Flex,
  Container,
  Box,
  Button,
  Input,
  Stack,
  Select,
  Divider,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertMessageSuccess from "../components/AlertMessage";
import AlertMessageFail from "../components/AlertMessageFail";

export default function add() {
  const { register, handleSubmit, errors } = useForm();

  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

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
          setResultOfPost={setResultOfPost}
        ></AlertMessageSuccess>
      ) : (
        <AlertMessageFail setResultOfPost={setResultOfPost}></AlertMessageFail>
      );
      setResultOfPost(newResult);
    });
  };

  const [resultOfPost, setResultOfPost] = useState("");

  return (
    <Layout>
      <Flex
        flexDirection="column"
        alignItems="stretch"
        alignContent="space-evenly"
        justifyContent="center"
        p="30px"
        m=" 50px auto 30px"
        background="#f2f2f2"
        borderRadius="10px"
        border={1}
        borderStyle="solid"
        width="70%"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            placeholder="Select payer"
            type="text"
            name="user"
            m="10px"
            ref={register({ required: true })}
            height="50px"
            background="white"
          >
            <option value="Calle">Calle</option>
            <option value="Linus">Linus</option>
          </Select>
          <Input
            p="10px"
            height="50px"
            borderRadius="10px"
            type="text"
            placeholder="Description"
            borderRadius="10px"
            background="white"
            name="what"
            m="10px"
            size="nm"
            ref={register({
              required: "Tell what the expense is!",
            })}
          />

          <Input
            height="50px"
            placeholder="Enter amount"
            type="number"
            borderRadius="10px"
            name="amount"
            m="10px"
            size="sm"
            ref={register({
              required: "You have to enter an amount!",
            })}
            background="white"
          />

          {errors.what && <p>{errors.what.message}</p>}
          {errors.amount && <p>{errors.amount.message}</p>}
          <Button
            type="submit"
            m="10px"
            rightIcon={"➞"}
            colorScheme="gray"
            variant="outline"
            background="white"
          >
            Add expense
          </Button>
        </form>
        {resultOfPost !== "" && resultOfPost}
      </Flex>
      <Divider p="20px" m="20px" />
    </Layout>
  );
}
