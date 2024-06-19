import { Box, Stack, useMediaQuery } from "@chakra-ui/react";
import { Size } from "./size";
import { Brightness } from "./brightness";
import { Contrast } from "./contrast";
import { Skip } from "./skip";

export const Sidebar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box h="100%" w={isMobile ? "100%" : "30%"} borderLeft="1px solid black">
      <Stack
        direction={isMobile ? "row" : "column"}
        flexWrap={isMobile ? "wrap" : "nowrap"}
        alignItems="flex-start"
        h="100%"
      >
        <Size />
        <Brightness />
        <Contrast />
        <Skip />
      </Stack>
    </Box>
  );
};
