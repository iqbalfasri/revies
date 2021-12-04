import { useQuery } from "react-query";
import { API } from "../helpers";

async function getTvPopular() {
  const { request } = API();
  const { data } = await request.get("tv/popular");

  return data;
}

export default function useGetTvPopular() {
  return useQuery("tvPopular", getTvPopular);
}
