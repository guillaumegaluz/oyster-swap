import React from "react";
import "./App.less";
import "./tutorial.less";
import { Routes } from "./routes";
import { Row, Col } from "antd";
import { Tutorial } from "./components/tutorial";
import { Hint } from "./components/tutorial/hints/hint";

function App() {
  return (
    <Row className="App">
      <Col span="8">
        <Tutorial />
      </Col>

      {/* COMMENT ME */}
      {/* <Hint step={0} /> */}

      {/* AND UNCOMMENT ME */}
      <Col span="16">
        <div className="Banner">
          <div className="Banner-description">
            Swap is unaudited software. Use at your own risk.
          </div>
        </div>
        <Routes />
      </Col>
    </Row>
  );
}

export default App;
