import React, { useState } from "react";
import { Step0, Step1 } from "./steps";
import { Button, Space, Row, Col } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";


export const Tutorial = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step === 0 ? 0 : step - 1);

  return (
    <div className="tutorial">
      {step === 0 && <Step0 />}
      {step === 1 && <Step1 />}

      <Row gutter={16} style={{ marginTop: "40px" }}>
        <Col span={12}><Button type="primary" block icon={<ArrowLeftOutlined />} onClick={prevStep}>Prev</Button></Col>
        <Col span={12}><Button type="primary" block onClick={nextStep}><Space>Next<ArrowRightOutlined /></Space></Button></Col>
      </Row>

    </div>
  )
}