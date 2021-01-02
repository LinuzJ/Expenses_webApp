import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
const AlertMessageFail = (props) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Alert
        status="fail"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Something went wrong!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Please try again. To close this window please click the button below
        </AlertDescription>
      </Alert>
      <Button onClick={console.log("test")}>Close</Button>
    </Flex>
  );
};

export default AlertMessageFail;
