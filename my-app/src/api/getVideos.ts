import { api } from "./api";
import { videoType } from "../types/videoType";

const getVideo = async (id: string) => {
  const data = await api.get<videoType>("movie/" + id + "/videos");
  return data.data;
};

export const video = { getVideo };
