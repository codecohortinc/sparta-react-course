import styles from './styles/homepage.module.css';
import BlogSummaryCard from './components/BlogSummaryCard';
import mainPageImg from './assets/Main_Page_Img.png';

/**
 * getPosts 함수는 PUBLISHED_POSTS 객체를 이용하여 모든 블로그 포스트를 가져옵니다.
 * 블로그 포스트 객체의 파일 이름으로 public/posts 디렉토리에서 해당 파일을 가져옵니다.
 * 파일을 가져온 후에는 파일의 내용을 blogContent로 설정하여 반환합니다.
 * 반환된 블로그 포스트 객체들을 posts 배열에 담아 반환합니다.
 */
const getPosts = async () => {
  const posts = await Promise.all(
    Object.entries(PUBLISHED_POSTS).map(async ([fileName, post]) => {
      const response = await fetch(`/posts/${fileName}`);
      const blogContent = await response.text();

      return {
        blogTitle: post.title,
        blogContent,
        blogFileName: fileName,
        blogAbstraction: post.abstraction,
        blogPublishedAt: post.publishedAt,
      };
    })
  );
};

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>👋 안녕하세요, x 개발자 x 입니다.</h1>
      <img src={mainPageImg} className={styles.mainImage} />
      <h2 className={styles.mainHeading}>최근 올라온 글: </h2>

      {/* 투두: 모든 블로그 포스트마다 BlogSummaryCard를 렌더링 하세요.*/}
      <BlogSummaryCard
        key={'sample.md'}
        blogPost={{
          blogTitle: '샘플 포스트',
          blogContent: '샘플 포스트 내용입니다.',
          blogFileName: 'sample.md',
          blogAbstraction: '샘플 포스트 요약입니다.',
          blogPublishedAt: new Date().toISOString(),
        }}
      />
    </div>
  );
}

export default App;
