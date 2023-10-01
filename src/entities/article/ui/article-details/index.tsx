import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import "./styles.scss";

export type ArticleDetailsProps = PropsWithChildren<{
  data?: import("shared/api").models.IArticle;
  number?: number;
}>;
export const ArticleDetails = ({ data, number }: ArticleDetailsProps) => {
  const navigate = useNavigate();
  if (!data) return null;

  return (
    <article className="article-details">
      <h2 className="article-details__title">{data.title}</h2>
      <p className="article-details__description">{data.body}</p>
      <button className="article-details__button" onClick={() => navigate("/")}>
        Back
      </button>
    </article>
  );
};
