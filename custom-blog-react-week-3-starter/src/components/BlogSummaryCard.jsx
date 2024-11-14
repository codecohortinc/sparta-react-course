import styles from '../styles/blogSummaryCard.module.css';
import { Link } from 'react-router-dom';
import { humanizeDate } from '../utils/date';

function BlogSummaryCard({ blogPost }) {
  const { blogTitle, blogAbstraction, blogPublishedAt, blogFileName } =
    blogPost;

  const humanizedDate = humanizeDate(blogPublishedAt);

  return (
    <div className={styles.wrapper}>
      <Link to={``} className={styles.title}>
        {blogTitle}
      </Link>
      <time dateTime={blogPublishedAt}>{humanizedDate}</time>
      <p>{blogAbstraction} </p>

      <Link to={``} className={styles.continueReadingLink}>
        블로그 계속 읽기 <span className={styles.arrow}>→</span>
      </Link>
    </div>
  );
}

export default BlogSummaryCard;
