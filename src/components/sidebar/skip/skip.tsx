import {
  Box,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useMediaQuery,
} from "@chakra-ui/react";

export const Skip = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box w={isMobile ? "45%" : "100%"} p="0 1rem">
      <FormLabel>Детализация:</FormLabel>
      <Slider aria-label="slider-ex-2" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};
