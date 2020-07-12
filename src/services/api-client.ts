import { create } from 'apisauce';
import humps from 'humps';
import AppConfig from '../configs/app-config';

const transformRequestParams = (params: object) =>
  JSON.stringify(humps.decamelizeKeys(params, { split: /(?=[A-Z0-9])/ }));

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const config = {
  baseURL: AppConfig.api.baseUrl,
  timeOut: 15000,
  headers,
  transformRequest: [transformRequestParams],
};

const ApiClient = create(config);

const get = (url: string, params: object) => ApiClient.get(url, params);

export { ApiClient, get };
