import { apiInstance } from "./base";
import type { IArticle } from "./models";
import { AxiosPromise } from "axios";

const ENDPOINT_URL = '/posts'

export const getArticlesList = ():AxiosPromise<IArticle[]> => apiInstance(ENDPOINT_URL)

export const getArticleById = (id: number):AxiosPromise<IArticle>  => apiInstance(`${ENDPOINT_URL}/${id}`)