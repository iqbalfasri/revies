import * as React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Link, useNavigate } from "react-router-dom";
import { Wrap, Text, Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useGetMoviePopular } from "../../../api/hooks";
import { Card } from "../../../components";
import { getImageSource } from "../../../utils";

export default function MoviePopular() {
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, hasNextPage, fetchNextPage } =
    useGetMoviePopular();

  return (
    <React.Fragment>
      <Text
        as="a"
        display="flex"
        alignItems="center"
        fontSize="42"
        fontWeight="bold"
        lineHeight="32px"
        onClick={() => navigate(-1)}
        sx={{
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon w={12} h={12} color="brand.yellow" mr={2} /> Popular
      </Text>

      <Box my={14}>
        <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
          {!isLoading &&
            isSuccess &&
            data.pages.map((page, index) => (
              <Wrap key={index} shouldWrapChildren spacing="24px">
                {page.results.map((movie) => (
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <Card
                      title={movie.original_title}
                      tagLabel="Action"
                      imgUrl={getImageSource(movie.poster_path)}
                    />
                  </Link>
                ))}
              </Wrap>
            ))}
        </InfiniteScroll>
      </Box>
    </React.Fragment>
  );
}
