import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../../components";
import { getImageSource } from "../../../utils";
import { Box, Text, Stack } from "@chakra-ui/react";
import { useGeTvRecommendation } from "../../../api/hooks";

export default function MovieRecommendations({ tvId }) {
  const { data, isLoading, isError } = useGeTvRecommendation({
    tv_id: tvId,
  });

  if (isLoading) {
    return null;
  }

  return (
    <Box pt={14}>
      <Text mb={6} fontSize="32px" fontWeight="bold" lineHeight="32px">
        You Might Also Like This!
      </Text>

      <Stack direction="row" shouldWrapChildren spacing="24px">
        {!isLoading &&
          !isError &&
          data.results.slice(0, 4).map((movie) => (
            <Link key={movie.id} to={`/tv/${movie.id}`}>
              <Card
                title={movie.original_name}
                voteAverage={movie.vote_average}
                imgUrl={getImageSource(movie.poster_path)}
              />
            </Link>
          ))}
      </Stack>
    </Box>
  );
}
