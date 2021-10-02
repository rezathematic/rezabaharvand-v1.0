import markdownStyles from "./markdown-styles.module.css";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

export default function PostBody({ content }) {
  return (
    <div className=" max-w-2xl mx-auto">
      <ReactMarkdown
        className={markdownStyles["markdown"]}
        components={CodeBlock}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
