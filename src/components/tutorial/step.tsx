import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Tip } from "./tip";
import Action from "./action";

const Step = ({ markdownPath }: { markdownPath: string }) => {
  const [markdown, setMarkdown] = useState("");
  
  // This loads markdown asynchronously from a local file
  useEffect(() => {
    console.log(`markdownPath`, markdownPath);
    const markdownFile = require(`./markdown/${markdownPath}.md`);
    
    fetch(markdownFile)
      .then(response => response.text())
      .then(text => setMarkdown(text))
  })

  return (
    <>
      <Markdown
        children={markdown}
        options={{
          overrides: {
            Tip: {
              component: Tip,
            },
            Action: {
              component: Action,
            }
          },
        }}
      />
    </>
  );
}

export default Step