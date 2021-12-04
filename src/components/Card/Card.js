import * as React from "react";
import { format } from "date-fns";
import { Box, Text, Image, Stack, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Tag from "../Tag/Tag";

function Dot() {
  return (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
    </svg>
  );
}

function Card({
  onClick,
  imgUrl,
  title,
  tagLabel,
  voteAverage,
  releaseYear,
  maxW = "292px",
}) {
  return (
    <Box
      maxW={maxW}
      w="100%"
      h="100%"
      minHeight="404px"
      boxSizing="border-box"
      bg="grey"
      position="relative"
      onClick={onClick}
      sx={{ cursor: "pointer" }}
      transition="0.2s all ease-in-out"
      _hover={{
        opacity: 0.7,
      }}
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
        <Image
          minW={maxW}
          id="poster"
          w="100%"
          h="100%"
          display="block"
          src={imgUrl}
          alt={title}
        />
      </Box>

      <Box
        w="100%"
        p="24px"
        boxSizing="border-box"
        position="absolute"
        bottom="0px"
        zIndex={10}
      >
        <Stack w="auto" spacing="14px" textAlign="left">
          {tagLabel ? <Tag>{tagLabel}</Tag> : null}

          <Flex alignItems="center">
            {voteAverage ? (
              <Text
                as="span"
                display="flex"
                alignItems="center"
                fontWeight="bold"
                color="brand.yellow"
              >
                <StarIcon mr={2} color="brand.yellow" w={4} h={4} />
                {voteAverage}
              </Text>
            ) : null}

            {releaseYear ? (
              <>
                <Box mx={2}>
                  <Dot />
                </Box>
                <Text fontSize="16px" opacity={0.5}>
                  Release Year: {format(new Date(releaseYear), "yyyy")}
                </Text>
              </>
            ) : null}
          </Flex>
          <Text fontSize="24px" fontWeight="bold" lineHeight="32px">
            {title}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
