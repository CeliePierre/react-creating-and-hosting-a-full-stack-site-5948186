import ArticleList from "../ArticleList";
import articles from "../article-content";

export default function ArticlesList() {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </>
  );
}