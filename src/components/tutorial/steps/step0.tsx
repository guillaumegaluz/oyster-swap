import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

export const Step0 = () => {
  const [markdown, setMarkdown] = useState("");
  
  // This loads markdown asynchronously from a local file
  useEffect(() => {
    const markdownPath = require("../markdown/toc.md");
    
    fetch(markdownPath)
      .then(response => response.text())
      .then(text => setMarkdown(text))
  })

  return (
    <>
      <Markdown children={markdown}/>
    </>
  );
}