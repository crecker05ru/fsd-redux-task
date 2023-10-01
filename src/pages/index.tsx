import { Route, Routes } from "react-router-dom";
import ArticlesListPage from "./ArticlesListPage";
import NoExistPage from "./noExist";
const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<ArticlesListPage/>} />
        <Route path="*" element={<NoExistPage />} />
    </Routes>
);
}

export default Pages;