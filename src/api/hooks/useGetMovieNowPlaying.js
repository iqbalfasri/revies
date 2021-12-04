import { useQuery } from "react-query";
import { API } from "../helpers";

async function getMovieNowPlaying() {
  const { request } = API();
  const { data } = await request.get("movie/now_playing");

  return data;
}

export default function useGetMovieNowPlaying() {
  return useQuery("movieNowPlaying", getMovieNowPlaying);
}
