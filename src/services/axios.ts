import axios from "axios";
import { AppError } from "../utils/AppError";

const api = axios.create({
  baseURL: "http://localhost:3333"
})

api.interceptors.response.use(response => response, requestError => {
  if(requestError.response && requestError.response.data) {
    return Promise.reject(new AppError(requestError.response.data.message))
  } else {
    return Promise.reject(requestError)
  }
})

export {api}