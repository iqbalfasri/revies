import { useInfiniteQuery } from "react-query";
import { API } from "../helpers";

async function getTvPopular() {
  const { request } = API();
  const { data } = await request.get("tv/popular");

  return data;
}

export default function useGetTvPopular() {
  return useInfiniteQuery("tvPopular", getTvPopular, {
    getNextPageParam: (lastPage) => {
      return lastPage.page === lastPage.total_pages
        ? undefined
        : lastPage.page + 1;
    },
  });
}
