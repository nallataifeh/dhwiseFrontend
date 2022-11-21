import { apis } from "service";

const COMMON_URL = `https://thehelpinghandapp.com/user/login/`;

const API_URLS = { POST: `${COMMON_URL}` };

export const post = (payload) => apis.post(API_URLS.POST, payload);
