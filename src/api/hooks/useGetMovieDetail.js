import {useQuery} from "react-query";
import {API} from "../helpers";

async function getMovieDetail({movie_id}) {
  const {request} = API();
  const {data} = await request.get(`/movie/${movie_id}`);

  return data;
}

export default function useGetMovieDetail({movie_id}) {
  return useQuery(["movieDetail", movie_id],
    () => getMovieDetail({movie_id})
  );
}
