import { Container, Box, Center } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const MySlider = (props) => {
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
    <Flex>
      <Slider defaultValue={40} isReversed>
        <SliderTrack bg="black" height="20px">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
      </Slider>
      <Box background="tomato" m="10px" width="10px" height="20px"></Box>
      <Slider defaultValue={40}>
        <SliderTrack bg="black" height="20px">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
      </Slider>
    </Flex>
  );
};

export default MySlider;
