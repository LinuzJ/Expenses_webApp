import Link from "next/link";
import Layout from "../components/layout";
import { Container, Box, Button } from "@chakra-ui/react";
export default function add() {
  const test = () => {
    fetch("/api/overview")
      .then((respone) => respone.json())
      .then((result) => console.log(result));
  };

  return (
    <Layout>
      <Container maxW="50%" centerContent>
        <Box padding="5" bg="gray.100" maxW="50%">
          Here you should be able to add stuff
        </Box>
      </Container>
      <Button onClick={test}>button</Button>
    </Layout>
  );
}
