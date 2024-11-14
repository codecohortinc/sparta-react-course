import styles from '../styles/blogPost.module.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { humanizeDate } from '../utils/date';

const getPost = async (fileName) => {
  const post = PUBLISHED_POSTS[fileName];

  const blogTitle = post.title;
  const blogFileName = fileName;
  const blogAbstraction = post.abstraction;
  const blogPublishedAt = post.publishedAt;
  const response = await fetch(`/posts/${blogFileName}`);
  const blogContent = await response.text();

  return {
    blogTitle,
    blogContent,
    blogFileName,
    blogAbstraction,
    blogPublishedAt,
  };
};

function BlogPost() {
  return (
    <article className={styles.pageWrapper}>
      <header className={styles.wrapper}>
        <div className={styles.content}>
          <h1>샘플 블로그</h1>
          <p>
            <time dateTime={new Date()}>
              작성일: {humanizeDate(new Date())}
            </time>
          </p>
        </div>
      </header>

      <div className={styles.page}>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag='div'
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={docco}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          ## GPT란 무엇인가? GPT(Generative Pre-trained Transformer)는
          OpenAI에서 개발한 자연어 처리 모델입니다.
        </Markdown>
      </div>
    </article>
  );
}
export default BlogPost;
