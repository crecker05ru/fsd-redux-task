import { useEffect, useState } from "react"
import { useArticles } from "../model/selectors"
import { useAppDispatch } from "shared/model";
import { fetchArticles } from "../model/stores";
import { ArticlesList } from "entities/article/ui/articles-list";
import { IArticle } from "shared/api/models";
import { articlesrtkApi } from "shared/api/rtk-query/articleService";
import { Loader } from "shared";
import { useInView } from "react-intersection-observer";

// export const ArticlesView = () => {
//   const articlesStore  = useArticles();
//   const dispatch = useAppDispatch()
//   useEffect(() => {
//     dispatch(fetchArticles())
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])
//   if (!articlesStore.articles) return <h1>No articles</h1>;
//   return articlesStore.articles && <ArticlesList data={articlesStore.articles as IArticle[]} />;
// }

export const ArticlesView = () => {
  const {ref, inView} = useInView({
    threshold: 0.9
  })
  const [articlesList, setArticlesList] = useState<IArticle[]>([])
  const [page, setPage] = useState(1)
  const limit = 10
  const totalCount = 100
  const totalPages = totalCount/limit
  const {data: articles, isLoading, refetch} = articlesrtkApi.useFetchArticlesQuery({_limit: limit, _page: page})
  console.log('inView', inView)

  useEffect(() => {
    // const {data} = articlesrtkApi.useFetchArticlesQuery({_limit: 10, _page: 1})
    if(articles){
    setArticlesList([...articlesList as IArticle[], ...articles as IArticle[]])
      
    }
    // setArticlesList([...articlesList as IArticle[], ...articles as IArticle[]])
    // setArticlesList(articles)
  },[articles])

  useEffect(() => {
    console.log('inView', inView)
    setPage((prev) => prev +1)
    // const {data} = articlesrtkApi.useFetchArticlesQuery({_limit: limit, _page: page})
    // setArticlesList([...articlesList as IArticle[],...data as IArticle[]])
    refetch()
  },[inView])
  if (!articlesList) return <h1>No articles</h1>;
  return articlesList && <div >
    <ArticlesList data={articlesList as IArticle[]} />
    {page < totalPages && !isLoading && <h2 ref={ref}>Load next articles</h2>}
    {isLoading && <Loader/>}
  </div>;
}