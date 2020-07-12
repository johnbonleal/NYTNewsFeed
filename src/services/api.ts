import { get } from './api-client';

const API = {
  FETCH_STORY: (param1: string, param2: object) => get(`/${param1}.json`, param2),
};

export default API;
