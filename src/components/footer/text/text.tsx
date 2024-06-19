import { Box, FormLabel, Input } from "@chakra-ui/react";

export const Text = () => {
  return (
    <Box>
      <FormLabel>Текст:</FormLabel>
      <Input placeholder="Текст"/>
    </Box>
  );
};
