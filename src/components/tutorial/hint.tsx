import { BulbOutlined } from "@ant-design/icons";
import React from "react";

const style = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#ff7272",
  fontFamily: "Monaco",
  padding: "20px",
  margin: "20px auto",
  width: "400px",
  height: "200px",
  borderRadius: "10px",
  border: "dashed 1px #2abdd2",
};

const Icon = () => {
  return <BulbOutlined style={{ fontSize: "24px", marginBottom: "20px" }} />;
}

export const Hint = ({ step }: { step: number | string }) => {
  switch (step) {
    case "app":
      return (
        <div style={style}>
          <Icon />
          Welcome!<br />
          Read the instructions on the left ;)
        </div>
      );
    case "exchange":
      return (
        <div style={style}>
          <Icon />
          <span>Nice!</span>
          <span>Now check <code>{`<ExchangeView />`}</code></span>
        </div>
      );
    case "trade":
      return (
        <div style={style}>
          <Icon />
          <span>This is where we will trade tokens</span>
          <span>Find the right code that reveals the UI to do that</span>
        </div>
      );
    case "pool":
      return (
        <div style={style}>
          <Icon />
          <span>This is where we will provide liquidity</span>
          <span>Find the right code that reveals the UI to do that</span>
        </div>
      );
    default:
      return <div>oops</div>
      break;
  }
}