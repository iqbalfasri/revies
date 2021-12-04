import * as React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { Card } from "../../../components";
import { getImageSource } from "../../../utils";

import { useGetCast } from "../../../api/hooks";

export default function MovieCast({ movieId }) {
  // get cast
  const {
    data: castData,
    isLoading: castLoading,
    isError: castError,
  } = useGetCast({
    movie_id: movieId,
  });

  return (
    <Box my={14}>
      <Text mb={6} fontSize="32px" lineHeight="32px" fontWeight="bold">
        Cast
      </Text>

      <Stack
        shouldWrapChildren
        direction="row"
        spacing="24px"
        overflowX="scroll"
      >
        {!castLoading &&
          !castError &&
          castData.cast.map((cast) => {
            return (
              <Card
                key={cast.cast_id}
                title={cast.name}
                imgUrl={getImageSource(cast?.profile_path)}
              />
            );
          })}
      </Stack>
    </Box>
  );
}
