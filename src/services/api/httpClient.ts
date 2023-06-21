import axios from "axios"

export interface IRequest {
  url: string
  method?: string
  responseType?: string
  headers?: any
  params?: any
  data?: any
  paramsSerializer?: (params: object | string) => string
}

axios.defaults.baseURL = "https://swapi.dev/api/"

const makeRequest = ({ url = "/", method = "get", headers, params, data }: IRequest) =>
  axios({
    url,
    method,
    responseType: "json",
    headers,
    params,
    data
  })

export default makeRequest
