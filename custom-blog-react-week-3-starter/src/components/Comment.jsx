import { useEffect, useRef } from 'react';

/**
 * utteranc를 기반으로 한 Comment 컴포넌트입니다.
 *
 * scriptElem.setAttribute('repo', 'heesungjang/sparta-blog-project');
 * 위 부분을 자신의 깃허브 레포지토리로 변경해주세요.
 *
 */
const Comment = () => {
  const ref = useRef(null);

  useEffect(() => {
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.setAttribute('repo', 'heesungjang/sparta-blog-project');
    scriptElem.setAttribute('issue-term', 'title');
    scriptElem.setAttribute('theme', 'github-light');
    scriptElem.setAttribute('label', 'blog-comment');
    scriptElem.crossOrigin = 'anonymous';
    if (ref.current) {
      ref.current.appendChild(scriptElem);
    }

    return () => {
      if (ref.current) {
        ref.current.removeChild(scriptElem);
      }
    };
  }, []);

  return (
    <section
      style={{ width: '100%', marginBottom: '50px' }}
      ref={ref}
    ></section>
  );
};

export default Comment;
