import { ArticleCard } from "entities/article/ui";
import type { PropsWithChildren } from "react";

export type ArticlesListProps = PropsWithChildren<{
  data?: import("shared/api").models.IArticle[],
}>

export const ArticlesList = ({data}: ArticlesListProps) => {
  console.log('data',data)
  if(data)console.log('if data',data) 
  return (
    <ul>
      {data && data.map(article => {
        return (<li><ArticleCard data={article}/></li>)
      })}
    </ul>
  )
}