import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Flex,
} from "@chakra-ui/react";
const AlertMessageSuccess = (props) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="20px"
    >
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Expense succefully submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your expense. To close this window please click
          the button below
        </AlertDescription>
      </Alert>
      <Button
        onClick={() => props.setResultOfPost("")}
        m="10px"
        rightIcon={"X"}
        colorScheme="gray"
        variant="outline"
      >
        Close
      </Button>
    </Flex>
  );
};

export default AlertMessageSuccess;
