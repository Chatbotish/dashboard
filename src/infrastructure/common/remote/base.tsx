import axios from "axios";
import config from "../../../common/config";

const baseURL = config.BASE_API;

const base = async (options:Object) => {
  const response = await axios({
    baseURL,
    headers: {
      Accept: "application/json",
    },
    ...options,
  });

  return response.data;
};

export const get = (url:String, params:Object) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options);
};

export const patch = (url:String, data:Object) => {
  const options = {
    method: "patch",
    url,
    data,
  };
  return base(options);
};

export const post = (url:String, data:Object) => {
  const options = {
    method: "post",
    url,
    data,
  };
  return base(options);
};

export const put = (url:String, data:Object) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};

export const del = (url:String, data:Object) => {
  const options = {
    method: "delete",
    url,
    data,
  };
  return base(options);
};
