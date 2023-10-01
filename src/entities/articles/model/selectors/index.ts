import { useAppSelector } from "shared/model";

export const useArticles = () => {
  return useAppSelector((store) => store.articles)
  // return useSelector((store) => store.entities.articlesSlice)
}