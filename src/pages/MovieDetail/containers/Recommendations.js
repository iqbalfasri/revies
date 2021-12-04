import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../../components";
import { getImageSource } from "../../../utils";
import { Box, Text, Stack } from "@chakra-ui/react";
import { useGetMovieRecommendations } from "../../../api/hooks";

export default function MovieRecommendations({ movieId }) {
  const { data, isLoading, isError } = useGetMovieRecommendations({
    movie_id: movieId,
  });

  if (isLoading) {
    return null;
  }

  return (
    <Box>
      <Text mb={6} fontSize="32px" fontWeight="bold" lineHeight="32px">
        You Might Also Like This!
      </Text>

      <Stack direction="row" shouldWrapChildren spacing="24px">
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
