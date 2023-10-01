import { ArticleCard } from "entities/article/ui";
import type { PropsWithChildren } from "react";

export type ArticlesListProps = PropsWithChildren<{
  data?: import("shared/api").models.IArticle[];
}>;

export const ArticlesList = ({ data }: ArticlesListProps) => {
  return (
    <ul>
      {data &&
        data.map((article, index: number) => {
          return (
            <li key={article.id}>
              <ArticleCard data={article} number={index + 1} />
            </li>
          );
        })}
    </ul>
  );
};
