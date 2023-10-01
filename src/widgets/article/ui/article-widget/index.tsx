import { ArticleCard } from "entities/article"
import { useEffect } from "react"
import { useParams } from "react-router"
import { getArticleById } from "shared/api/articles"

export const ArticleWidget = () => {
  const params = useParams()
  useEffect(() => {
    const fetchArticle = async () => {
    const data = await getArticleById(Number(params?.id))
    return data
    }
    fetchArticle()
  },[params?.id])

  return <ArticleCard/>
}