import { Route, Routes } from "react-router-dom";
import ArticlesListPage from "./ArticlesListPage";
import NoExistPage from "./noExist";
import ArticleDetailsPage from "./ArticleDetailsPage";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticlesListPage />} />
      <Route path="/posts/:id" element={<ArticleDetailsPage />} />
      <Route path="*" element={<NoExistPage />} />
    </Routes>
  );
};

export default Pages;
