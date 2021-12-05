import { useQuery } from "react-query";
import { API } from "../helpers";

async function getTvSeason({ tv_id, season_number }) {
  const { request } = API();
  const { data } = await request.get(`/tv/${tv_id}/season/${season_number}`);

  return data;
}

export default function useGetTvSeason({ tv_id, season_number }) {
  return useQuery(
    ["tvDetail", tv_id, season_number],
    () => getTvSeason({ tv_id, season_number }),
    { enabled: typeof season_number !== "undefined" }
  );
}
