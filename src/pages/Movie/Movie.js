import * as React from "react";
import { Box, Container } from "@chakra-ui/react";
import { useParams } from "react-router";

import MovieNowPlaying from "./containers/NowPlaying";
import MoviePopular from "./containers/Popular";

export default function Movie() {
  const params = useParams();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box position="relative" py={16}>
      <Container py={16} maxW="container.xl">
        {params.category === "now-playing" ? (
          <MovieNowPlaying />
        ) : params.category === "popular" ? (
          <MoviePopular />
        ) : null}
      </Container>
    </Box>
  );
}
