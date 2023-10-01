import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import "./styles.scss";

export type ArticleCardProps = PropsWithChildren<{
  data?: import("shared/api").models.IArticle;
  number?: number;
}>;
export const ArticleCard = ({ data, number }: ArticleCardProps) => {
  const navigate = useNavigate();
  if (!data) return null;

  return (
    <article className="article-item">
      <h2 className="article-item__title">
        <span className="article-item__number">№{number}</span> {data.title}
      </h2>
      <p className="article-item__description">{data.body}</p>
      <button
        className="article-item__button"
        onClick={() => navigate(`posts/${data.id}`)}
      >
        Read more
      </button>
    </article>
  );
};
