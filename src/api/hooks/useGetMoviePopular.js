import { useInfiniteQuery } from "react-query";
import { API } from "../helpers";

async function getMoviePopular({ pageParam = 1 }) {
  const { request } = API();
  const { data } = await request.get(`movie/popular?page=${pageParam}`);

  return data;
}

export default function useGetMoviePopular() {
  return useInfiniteQuery("moviePopular", getMoviePopular, {
    getNextPageParam: (lastPage) => {
      return lastPage.page === lastPage.total_pages
        ? undefined
        : lastPage.page + 1;
    },
  });
}
