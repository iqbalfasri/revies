import { useQuery } from "react-query";
import { API } from "../helpers";

async function getTvDetail({ tv_id }) {
  const { request } = API();
  const { data } = await request.get(`/tv/${tv_id}`);

  return data;
}

export default function useGetTvDetail({ tv_id }) {
  return useQuery(["tvDetail", tv_id], () => getTvDetail({ tv_id }));
}
