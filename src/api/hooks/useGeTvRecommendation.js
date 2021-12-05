import { useQuery } from "react-query";
import { API } from "../helpers";

async function getTvRecommendations({ tv_id }) {
  const { request } = API();
  const { data } = await request.get(`/tv/${tv_id}/recommendations`);

  return data;
}

export default function useGeTvRecommendation({ tv_id }) {
  return useQuery(["tvRecommendations", tv_id], () =>
    getTvRecommendations({ tv_id })
  );
}
