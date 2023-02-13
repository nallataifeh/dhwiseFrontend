import { apis } from "service";

const COMMON_URL = `https://thehelpinghandapp.com/user/`;

const API_URLS = {
  POST: `${COMMON_URL}register/`,
  POST_1: `${COMMON_URL}login/`,
};

export const post = (payload) => apis.post(API_URLS.POST, payload);

export const post1 = (payload) => apis.post(API_URLS.POST_1, payload);
