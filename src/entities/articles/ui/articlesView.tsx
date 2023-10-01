import { useEffect } from "react"
import { useArticles } from "../model/selectors"
import { useAppDispatch } from "shared/model";
import { fetchArticles } from "../model/stores";
import { ArticlesList } from "entities/article/ui/articles-list";
import { IArticle } from "shared/api/models";

export const ArticlesView = () => {
  const articlesStore  = useArticles();
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchArticles())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if (!articlesStore.articles) return <h1>No articles</h1>;
  return articlesStore.articles && <ArticlesList data={articlesStore.articles as IArticle[]} />;
}