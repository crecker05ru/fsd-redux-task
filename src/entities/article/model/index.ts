import { getArticlesList } from "shared/api/articles";

export const getArticles = async () => {
  const response = await getArticlesList();
  return await response.data;
}