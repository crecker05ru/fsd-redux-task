import type { PropsWithChildren } from "react";

export type ArticleCardProps = PropsWithChildren<{
  data?: import("shared/api").models.IArticle,
}>
export const ArticleCard = ({data}: ArticleCardProps) => {
  if(!data) return null;

  return (
    <article>
    <h2>{data.title}</h2>
    <p>{data.body}</p>
    </article>
  )
}