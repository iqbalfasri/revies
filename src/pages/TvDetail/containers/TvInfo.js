import * as React from "react";
import { format } from "date-fns";
import {
  Box,
  Text,
  Stack,
  Flex,
  Select,
  StackDivider,
  Image,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Card } from "../../../components";
import { useGetTvDetail, useGetTvSeason } from "../../../api/hooks";
import { getImageSource } from "../../../utils";

export default function TvInfo({ tvId }) {
  const [seasonNumber, setSeasonNumber] = React.useState(undefined);

  const { data, isLoading } = useGetTvDetail({ tv_id: tvId });
  const { data: episodes, isLoading: episodesLoading } = useGetTvSeason({
    tv_id: tvId,
    season_number: seasonNumber,
  });

  if (isLoading) {
    return null;
  }

  return (
    <Flex>
      <Card
        maxW="500px"
        title={data?.original_name}
        voteAverage={data?.vote_average}
        releaseYear={data?.first_air_date}
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
              {format(new Date(data?.first_air_date), "MMMM dd yyyy")}
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

        <Flex mt={12}>
          <Text mr={4} fontSize="24px" fontWeight="bold">
            Episodes
          </Text>
          <Box w="fit-content">
            <Select
              bg="brand.black"
              placeholder="Select Season"
              onChange={(event) => {
                setSeasonNumber(event.target.value);
              }}
            >
              {data?.seasons.map((season, index) => {
                return (
                  <option key={season.id} value={index + 1}>
                    {season.name}
                  </option>
                );
              })}
            </Select>
          </Box>
        </Flex>

        <Box mt={8}>
          <Stack
            spacing="24px"
            divider={<StackDivider borderColor="rgba(255, 255, 255, 0.1)" />}
          >
            {!episodesLoading &&
              typeof episodes !== "undefined" &&
              episodes.episodes.map((episode) => (
                <Stack
                  direction="row"
                  spacing="24px"
                  alignItems="flex-start"
                  key={episode.id}
                  w="full"
                >
                  <Box w="100%" maxW="160px" h="100px" bg="grey">
                    {episode.still_path !== null ? (
                      <Image
                        bg="grey"
                        w="100%"
                        maxW="160px"
                        h="100%"
                        alt={episode.name}
                        src={getImageSource(episode.still_path)}
                      />
                    ) : null}
                  </Box>

                  <Box>
                    <Text mb={4} fontSize="20px" fontWeight="bold">
                      {episode.name}
                    </Text>
                    <Text fontSize="16px" lineHeight="32px" opacity={0.5}>
                      {episode.overview}
                    </Text>
                  </Box>
                </Stack>
              ))}
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
