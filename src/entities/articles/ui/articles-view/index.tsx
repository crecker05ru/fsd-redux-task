import { useEffect, useState } from "react";
import { ArticlesList } from "entities/articles/ui/articles-list";
import { IArticle } from "shared/api/models";
import { articlesrtkApi } from "shared/api/rtk-query/articleService";
import { Loader } from "shared";
import { useInView } from "react-intersection-observer";

export const ArticlesView = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const [articlesList, setArticlesList] = useState<IArticle[]>([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const totalCount = 100;
  const totalPages = totalCount / limit;
  const {
    data: articles,
    isLoading,
    refetch,
  } = articlesrtkApi.useFetchArticlesQuery({ _limit: limit, _page: page });

  useEffect(() => {
    if (articles) {
      setArticlesList([
        ...(articlesList as IArticle[]),
        ...(articles as IArticle[]),
      ]);
    }
  }, [articles]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      refetch();
    }
  }, [inView]);
  if (!articlesList) return <h1>No articles</h1>;
  return (
    articlesList && (
      <div>
        <ArticlesList data={articlesList as IArticle[]} />
        {page < totalPages && !isLoading && (
          <h2 ref={ref}>Load next articles</h2>
        )}
        {isLoading && <Loader />}
      </div>
    )
  );
};
