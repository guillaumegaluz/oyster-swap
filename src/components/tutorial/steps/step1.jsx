import React, { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';
import { TutorialCollapse } from "../collapse";

export const Step1 = () => {
  const [markdown, setMarkdown] = useState("");
  const [markdown2, setMarkdown2] = useState("");

  // This loads markdown asynchronously from a local file
  useEffect(() => {
    const markdownPath = require("../markdown/content.md");
    const markdown2Path = require("../markdown/content2.md");

    fetch(markdownPath).then(response => response.text()).then(text => setMarkdown(text))
    fetch(markdown2Path).then(response => response.text()).then(text => setMarkdown2(text))
  })

  return (
    <>
      <Markdown children={markdown}/>

      <TutorialCollapse
        title={"What is .tsx?"}
        content={
          <p>
            The extension <code>.tsx</code> is a port manteau between <code>.js</code> (a normal Javascript file),
             <code>.jsx</code> (we had "x" when the js file renders JSX content),
             <code>.ts</code> (when the Javascript code is written through Typescript).
            When you put all three concepts together you get <code>.tsx</code>
          </p>
        }
      />

      <Markdown children={markdown2}/>
    </>
  )
}