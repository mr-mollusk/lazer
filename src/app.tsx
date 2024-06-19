import { Box, Stack, VStack, useMediaQuery } from "@chakra-ui/react";
import "./styles/index.css";
import { Canvas, Footer, Header, Sidebar } from "./components";

function App() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box w="100%" h="100%">
      <VStack h="100%" justifyContent="space-between" gap="0">
        <Box w="100%">
          <Header />
        </Box>
        <Box h="100%" w="100%" flex="1 1 auto">
          <Stack
            direction={isMobile ? "column" : "row"}
            alignItems={isMobile ? "center" : "stretch"}
            h="100%"
          >
            <Canvas size={400} />
            <Sidebar />
          </Stack>
        </Box>
        <Box w="100%">
          <Footer />
        </Box>
      </VStack>
    </Box>
  );
}

export default App;
