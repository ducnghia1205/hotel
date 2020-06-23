import { AsyncStorage } from "react-native";
import { Configs } from '../configs/configs';

const _getAccessToken = async () => {
  const userToken = await AsyncStorage.getItem(Configs.AuthStorageKey);
  const jsonUserToken = JSON.parse(userToken);
  return jsonUserToken?.auth?.access_token ? jsonUserToken.auth.access_token : "";
}

const api = `https://${Configs.apiEcom}/api/`;
const defaultOptions = {
  baseUrl: api
}
export default class BaseService {

  constructor(options = defaultOptions) {
    this.baseUrl = options.baseUrl;
  }

  async postImage(endpoint, idProduct, objBody) {
    if (objBody && objBody.length > 0) {
      try {
        let access_token = await _getAccessToken();
        let body = new FormData();
        objBody.map((source) => {
          body.append('files', {
            uri: source.uri,
            name: source.uri.slice(source.uri.lastIndexOf('/') + 1),
            type: `image/${source.uri.substr(source.uri.lastIndexOf('.') + 1)}`
          })
        })
        const response = await fetch(`${api}${'files/'}${endpoint}${`/${idProduct}/images`}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${access_token}`
          },
          body: body ? body : null,
          credentials: 'include',
        });
        if (!response.ok) {
          //error
        }
        return await response.json();
      } catch (error) {
        console.log('error PostImage', error)
      }
    } else {
      return true
    }


  }

  get(endpoint) {
    return this.requestHttp('GET', endpoint);
  }

  post(endpoint, params) {
    return this.requestHttp('POST', endpoint, params);
  }

  upload(endpoint, params) {
    return this.requestHttp('POST', endpoint, params, headers);
  }

  put(endpoint, params) {
    return this.requestHttp('PUT', endpoint, params);
  }

  patch(endpoint, params) {
    return this.requestHttp('PATCH', endpoint, params);
  }

  delete(endpoint, params) {
    return this.requestHttp('DELETE', endpoint, params);
  }

  async requestHttp(method, endpoint, params, headers) {
    const url = this.baseUrl + endpoint
    const access_token = await _getAccessToken();
    const options = {
      method,
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    };
    if (headers) options.headers["Content-Type"] = "multipart/form-data";
    if (params) options.body = JSON.stringify(params);
    const response = await fetch(url, options);
    if (!response.ok) {
      //error
    }
    return await response.json();
  }
}

