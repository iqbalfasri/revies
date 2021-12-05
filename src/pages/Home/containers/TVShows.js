import * as React from "react";
import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Card } from "../../../components";
import { useGetTvPopular } from "../../../api/hooks";
import { getImageSource } from "../../../utils";
import { Link } from "react-router-dom";

export default function TVShows() {
  const { data, isLoading, isError } = useGetTvPopular();

  return (
    <Box my={16}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="32px">
          TV Show
        </Text>

        <Link to="/movies/tv">
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
        </Link>
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
          data.pages[0].results.slice(0, 4).map((movie) => (
            <Link key={movie.id} to={`/tv/${movie.id}`}>
              <Card
                voteAverage={movie.vote_average}
                title={movie.original_name}
                imgUrl={getImageSource(movie.poster_path)}
              />
            </Link>
          ))}
      </Stack>
    </Box>
  );
}
