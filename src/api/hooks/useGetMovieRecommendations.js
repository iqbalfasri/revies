import { useQuery } from "react-query";
import { API } from "../helpers";

async function getMovieRecommendations({ movie_id }) {
  const { request } = API();
  const { data } = await request.get(`/movie/${movie_id}/recommendations`);

  return data;
}

export default function useGetMovieRecommendations({ movie_id }) {
  return useQuery(["movieRecommendations", movie_id], () =>
    getMovieRecommendations({ movie_id })
  );
}
