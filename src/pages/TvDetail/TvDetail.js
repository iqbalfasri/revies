import * as React from "react";
import { Box, Container } from "@chakra-ui/react";
import { useParams } from "react-router";

import TvInfo from "./containers/TvInfo";
import MovieRecommendations from "./containers/Recommendations";

export default function TvDetail() {
  const params = useParams();

  return (
    <Box py={40}>
      <Container maxW="container.xl">
        <TvInfo tvId={params?.id} />
        <MovieRecommendations tvId={params?.id} />
      </Container>
    </Box>
  );
}
