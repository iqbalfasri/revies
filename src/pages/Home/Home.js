import * as React from "react";
import {Box, Container} from "@chakra-ui/react";

import {Header} from "../../components";

// Containers
import NewRelease from "./containers/NewRelease";
import TVShows from "./containers/TVShows";
import Popular from "./containers/Popular";

export default function Home() {
  return (
    <Box>
      <Header/>
      <Container maxW="container.xl">
        <NewRelease/>
        <TVShows/>
        <Popular/>
      </Container>
    </Box>
  );
}
