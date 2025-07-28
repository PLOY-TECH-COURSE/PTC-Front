import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CodeContainer = styled.pre`
  background-color: #2d2d2d;
  border-radius: 12px;
  padding: 1.2rem;
  overflow-x: auto;
  font-size: 0.95rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  border: 1px solid #444;

  code {
    font-family: 'Fira Code', monospace;
    white-space: pre;
  }
`;

const CodeHighlighter = ({ language, code }) => {
  const codeRef = useRef(null);
  console.log(code)
  const extractCodeString = (codeArray) => {
    if (!Array.isArray(codeArray)) return '';

    return codeArray
      .map((el) => {
        // 문자열이면 그대로 반환
        if (typeof el === 'string') return el;
        // React element면 children 추출
        if (el?.props?.children) return el.props.children;
        return '';
      })
      .join('\n');
  };
  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <CodeContainer>
      <code ref={codeRef} className={`language-${language}`}>
        {extractCodeString(code)}
      </code>
    </CodeContainer>
  );
};

export default CodeHighlighter;