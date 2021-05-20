import React from "react";

const style = {
  background: "white",
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  justifyContent: "center",
  color: "red",
  fontFamily: "Monaco",
  padding: "20px",
  margin: "20px auto",
  width: "400px",
  height: "200px"
};

export const Hint = ({ step }: { step: number }) => {
  switch (step) {
    case 0:
      return (
        <div style={style}>
          Welcome!<br />
          Read the instructions on the left ;)
        </div>
      );
    case 1:
      return (
        <div style={style}>
          <span>Nice!</span>
          <span>Now check <code>{`<ExchangeView />`}</code></span>
        </div>
      )
    default:
      return <div>oops</div>
      break;
  }
}