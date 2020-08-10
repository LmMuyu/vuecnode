import { request } from "./request";

export const getDetailInfo = async (id) => {
  let data = await request({
    url: `/topic/${id}`,
    method: "get",
  });

  return data;
};

export const getUserByName = (loginname) => {
  return request({
    url: `/user/${loginname}`,
    method: "get",
  });
};
