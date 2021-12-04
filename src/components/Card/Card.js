import * as React from "react";
import { Box, Text, Image, Stack } from "@chakra-ui/react";
import Tag from "../Tag/Tag";

function Card({ onClick, imgUrl, title, tagLabel }) {
  return (
    <Box
      maxW="292px"
      w="100%"
      h="100%"
      minHeight="404px"
      boxSizing="border-box"
      bg="grey"
      position="relative"
      onClick={onClick}
      sx={{ cursor: "pointer" }}
      _hover
    >
      <Box
        id="overlay"
        position="absolute"
        w="100%"
        h="100%"
        bgGradient="linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%)"
        zIndex={1}
      />
      <Box position="relative">
        <Image id="poster" w="100%" h="100%" display="block" src={imgUrl} alt={title} />
      </Box>

      <Box
        w="100%"
        p="24px"
        boxSizing="border-box"
        position="absolute"
        bottom="0px"
        zIndex={10}
      >
        <Stack w="auto" textAlign="left">
          <Tag>{tagLabel}</Tag>

          <Text fontSize="24px" fontWeight="bold">
            {title}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
