import * as React from "react";
import { format } from "date-fns";
import { Box, Container, Flex, Text, Stack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useGetMovieDetail } from "../../api/hooks";
import { useParams } from "react-router-dom";
import { Card } from "../../components";
import { getImageSource } from "../../utils";

import MovieRecommendations from "./containers/Recommendations";
import MovieCast from "./containers/Cast";

export default function MovieDetail() {
  const params = useParams();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // detail movie
  const { data, isLoading, isError } = useGetMovieDetail({
    movie_id: params?.id,
  });

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <Text>Error!</Text>;
  }

  return (
    <Box py={40}>
      <Container maxW="container.xl">
        <Flex>
          <Card
            maxW="500px"
            title={data?.original_title}
            voteAverage={data?.vote_average}
            releaseYear={data?.release_date}
            imgUrl={getImageSource(data?.poster_path)}
          />

          <Box maxW="full" mx={12}>
            <Text fontSize="32px" fontWeight="bold">
              Synopsis
            </Text>
            <Box mt={4} bg="#242424" p={4}>
              <Text>{data?.overview}</Text>
            </Box>

            <Stack my={8} spacing="18px">
              <Box position="relative" display="flex">
                <Text as="span" w="100px" fontSize="18px" fontWeight="bold">
                  Release
                </Text>
                <Text>
                  {format(new Date(data?.release_date), "MMMM dd yyyy")}
                </Text>
              </Box>
              <Box position="relative" display="flex">
                <Text as="span" w="100px" fontSize="18px" fontWeight="bold">
                  Genre
                </Text>
                {data?.genres.map((genre) => {
                  return (
                    <Text key={genre.id} as="span">
                      {`${genre.name}, `}&nbsp;
                    </Text>
                  );
                })}
              </Box>
              <Box position="relative" display="flex">
                <Text as="span" w="100px" fontSize="18px" fontWeight="bold">
                  Duration
                </Text>
                <Text>{data?.runtime} Minutes</Text>
              </Box>
              <Box position="relative" display="flex">
                <Text as="span" w="100px" fontSize="18px" fontWeight="bold">
                  Rate
                </Text>
                <Text as="span" display="flex" alignItems="center">
                  <StarIcon mr={2} color="brand.yellow" w={4} h={4} />
                  {data?.vote_average}
                  <Text ml={2} opacity={0.5}>
                    ({data?.vote_count} reviews)
                  </Text>
                </Text>
              </Box>
            </Stack>
          </Box>
        </Flex>

        <MovieCast movieId={params?.id} />
        <MovieRecommendations movieId={params?.id} />
      </Container>
    </Box>
  );
}
