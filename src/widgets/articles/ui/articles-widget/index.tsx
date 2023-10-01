import { ArticlesUI } from "entities/articles";
import { useEffect, useState } from "react";
import { getArticlesList } from "shared/api/articles";
import { IArticle } from "shared/api/models";

export const ArticlesWidget = () => {
  const [articles, setArticles] = useState<unknown>();

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticlesList();
      if (data) {
        setArticles(data.data);
      }
    };
    fetchArticles();
  }, []);
  if (!articles) return <h1>No articles</h1>;
  return articles && <ArticlesUI.ArticlesList data={articles as IArticle[]} />;
};
