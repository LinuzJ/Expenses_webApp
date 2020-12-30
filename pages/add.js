import Link from "next/link";
import Layout from "../components/layout";
import { Container, Box, Button, Input, Stack, Select } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function add() {
  const test = () => {
    fetch("/api/overview")
      .then((respone) => respone.json())
      .then((result) => console.log(result));
  };

  return (
    <Layout>
      <Stack margin="auto" width="70%" border="black" p="20px">
        <Select placeholder="Select payer">
          <option value="option1">Calle</option>
          <option value="option2">Linus</option>
        </Select>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>
      <Button onClick={test}>button</Button>
    </Layout>
  );
}
