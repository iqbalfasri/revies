import { useInfiniteQuery } from "react-query";
import { API } from "../helpers";

async function getMovieNowPlaying({ pageParam = 1 }) {
  const { request } = API();
  const { data } = await request.get(`movie/now_playing?page=${pageParam}`);

  return data;
}

export default function useGetMovieNowPlaying() {
  return useInfiniteQuery("movieNowPlaying", getMovieNowPlaying, {
    getNextPageParam: (lastPage) => {
      return lastPage.page === lastPage.total_pages
        ? undefined
        : lastPage.page + 1;
    },
  });
}
