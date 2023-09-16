"use client";

import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
hljs.registerLanguage("xml", xml);

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import "highlight.js/styles/github.css";
import { useEffect } from "react";

type parameterLang = "js" | "xml";

export default function HlCode({
  children,
  className,
  lang,
  multiline,
}: {
  children: string;
  className?: string;
  lang: parameterLang;
  multiline?: boolean;
}) {
  useEffect(() => {
    hljs.highlightAll();

    hljs.configure({
      ignoreUnescapedHTML: true,
    });
  });

  return (
    <pre className="max-w-[100%]">
      <code
        className={`${
          lang === "js" ? "js" : "xml"
        } !bg-zinc-900 !text-gray-300 rounded-md ${
          multiline ? "whitespace-pre-wrap" : "whitespace-nowrap"
        } w-[40rem] max-w-[calc(100vw-3rem)] ${className}`}
      >
        {children}
      </code>
    </pre>
  );
}
