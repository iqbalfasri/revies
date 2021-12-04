import { useQuery } from "react-query";
import { API } from "../helpers";

async function getMoviePopular() {
  const { request } = API();
  const { data } = await request.get("movie/popular");

  return data;
}

export default function useGetMoviePopular() {
  return useQuery("moviePopular", getMoviePopular);
}
