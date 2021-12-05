import * as React from "react";
import { Flex, Text, Spinner } from "@chakra-ui/react";

export default function LoadMore() {
  return (
    <Flex
      w="full"
      py={6}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Spinner size="lg" opacity={0.5} />
      <Text mt={2} opacity={0.5} fontSize="16px">
        loading more movies for you...
      </Text>
    </Flex>
  );
}
