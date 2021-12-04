import * as React from "react";
import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Card } from "../../../components";
import { useGetMoviePopular } from "../../../api/hooks";
import { getImageSource } from "../../../utils";
import { Link } from "react-router-dom";

export default function Popular() {
  const { data, isLoading, isError } = useGetMoviePopular();

  return (
    <Box my={16}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="32px">
          Popular
        </Text>

        <Box
          display="flex"
          as="span"
          color="brand.yellow"
          fontWeight={500}
          sx={{ cursor: "pointer" }}
        >
          See All
          <ChevronRightIcon color="brand.yellow" w={6} h={6} />
        </Box>
      </Flex>
      <Stack
        shouldWrapChildren
        my={6}
        direction="row"
        spacing="24px"
        overflowX={["scroll", "unset"]}
      >
        {!isLoading &&
          !isError &&
          data.results.slice(0, 4).map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <Card
                title={movie.original_title}
                tagLabel="Action"
                imgUrl={getImageSource(movie.poster_path)}
              />
            </Link>
          ))}
      </Stack>
    </Box>
  );
}
