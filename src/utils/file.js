import { request } from "./request";

export const getUserByName = (loginname) => {
  return request({
    url: `/user/${loginname}`,
    method: "get",
  });
};
