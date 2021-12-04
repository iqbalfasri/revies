import * as React from "react";
import { Text } from "@chakra-ui/react";

export default function Tag({ children }) {
  return (
    <Text
      w="fit-content"
      display="inline-block"
      bg="brand.blue018"
      color="brand.blue"
      as="span"
      py="4px"
      px="8px"
      boxSizing="border-box"
      borderBottomLeftRadius="8px"
      borderTopRightRadius="8px"
    >
      {children}
    </Text>
  );
}
