import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
const AlertMessageFail = (props) => {
  return (
    <Alert status="fail">
      <AlertIcon />
      Data uploaded to the server. Fire on!
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
};

export default AlertMessageFail;
