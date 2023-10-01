import { ArticlesList } from "entities/article/ui/articles-list";
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
    // setArticles(getArticles())
  }, []);
  if (!articles) return <h1>No articles</h1>;
  return articles && <ArticlesList data={articles as IArticle[]} />;
};
