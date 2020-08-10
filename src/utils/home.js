import { request } from "./request";

export let getTopics = async (config) => {
  let data = request({
    url: "/topics",
    method: "get",
    params: config,
  });

  return data;
};


