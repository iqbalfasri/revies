import { useQuery } from "react-query";
import { API } from "../helpers";

async function getMovieCast({movie_id}) {
  const { request } = API();
  const { data } = await request.get(`/movie/${movie_id}/credits`);

  return data;
}

export default function useGetCast({movie_id}) {
  return useQuery(["movieCast", movie_id], () => getMovieCast({movie_id}));
}
