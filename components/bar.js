import { Container, Box, Center } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

const Bar = (props) => {
  let LeftBoxWidth;
  let MiddleBoxWidth;
  let RightBoxWidth;

  if (props.leader === "Linus") {
    LeftBoxWidth = (100 - props.money / 100).toString + "px";
    MiddleBoxWidth = (props.money / 100).toString + "px";
    RightBoxWidth = (100).toString + "px";
  } else {
    LeftBoxWidth = (100).toString + "px";
    MiddleBoxWidth = (props.money / 100).toString + "px";
    RightBoxWidth = (100 - props.money / 100).toString + "px";
  }
  return (
    <div>
      <SimpleGrid columns={3}>
        <Box bg="black" height="80px" width={LeftBoxWidth}></Box>
        <Center bg="tomato" height="80px" width={MiddleBoxWidth}>
          {props.money}
        </Center>
        <Box bg="black" height="80px" width={RightBoxWidth}></Box>
      </SimpleGrid>
    </div>
  );
};

export default Bar;
