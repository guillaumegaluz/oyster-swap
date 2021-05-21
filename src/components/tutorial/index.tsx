import React, { useEffect, useState } from "react";
import { Button, Space, Row, Col } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Step from "./step";

export const Tutorial = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step === 0 ? 0 : step - 1);

  // on page load, get the last step from local storage
  useEffect(() => {
    const stepString = localStorage.getItem('tutorialStep');
    const stepNumber = stepString ? parseInt(stepString) : 0;

    if (typeof stepNumber === "number") {
      setStep(stepNumber);
    }
  }, []);

  // on step change, save the new step to local storage
  useEffect(() => {
    localStorage.setItem('tutorialStep', step.toString());
  }, [step]);

  return (
    <div className="tutorial">
      {step === 0 && <Step markdownPath={"intro"} />}
      {step === 1 && <Step markdownPath={"amm"} />}
      {step === 2 && <Step markdownPath={"architecture"} />}
      {step === 3 && <Step markdownPath={"pool"} />}

      <Row gutter={16} style={{ marginTop: "40px" }}>
        {step !== 0 && <Col span={12}><Button type="primary" block icon={<ArrowLeftOutlined />} onClick={prevStep}>Prev</Button></Col>}
        <Col span={step === 0 ? 24 : 12}><Button type="primary" block onClick={nextStep}><Space>Next<ArrowRightOutlined /></Space></Button></Col>
      </Row>

    </div>
  )
}