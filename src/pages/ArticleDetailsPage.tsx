import { ArticleUI } from "entities/article";
import { useParams } from "react-router-dom";
import { articlesrtkApi } from "shared/api/rtk-query/articleService";

const ArticleDetailsPage = () => {
  const params = useParams();
  const { data: article } = articlesrtkApi.useFetchArticleByIdQuery(
    String(params?.id)
  );
  return (
    <div>
      <ArticleUI.ArticleDetails data={article} />
    </div>
  );
};

export default ArticleDetailsPage;
