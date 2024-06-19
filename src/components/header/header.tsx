import { HStack } from "@chakra-ui/react";
import { Temperature } from "./temperature";
import { Status } from "./status";
import { Charge } from "./charge";

export const Header = () => {
  return (
    <header>
      <HStack
        justifyContent="space-around"
        p="0.5rem 0"
        borderBottom="1px solid black"
      >
        <Temperature />
        <Charge />
        <Status />
      </HStack>
    </header>
  );
};
