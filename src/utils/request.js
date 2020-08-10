import axios from "axios";
import { Loading } from "element-ui";
import Vue from "vue";

Vue.use(Loading);

let loaderStore = null;

export function request(config) {
  const instance = axios.create({
    // baseURL: "https://cnodejs.org/api/v1",
    timeout: 5000,
  });

  instance.interceptors.request.use(
    (config) => {
      loaderStore = Loading.service({
        lock: true,
        text: "加载中……",
        background: "rgba(0, 0, 0, 0.7)",
      });
      return config;
    },
    (error) => {
      loaderStore.close();
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      loaderStore.close();
      return res;
    },
    (error) => {
      loaderStore.close();
      return Promise.reject(error);
    }
  );

  return instance(config);
}
