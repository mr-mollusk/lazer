import { HStack } from "@chakra-ui/react";
import { Text } from "./text";
import { Power } from "./power";

export const Footer = () => {
  return (
    <footer>
      <HStack
        justifyContent="space-around"
        p="1rem 0"
        borderTop="1px solid black"
      >
        <Text />
        <Power />
      </HStack>
    </footer>
  );
};
