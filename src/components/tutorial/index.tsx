import React, { useEffect, useState } from "react";
import { Button, Space, Row, Col } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Step from "./step";

const STEPS = [
  "intro",
  "amm",
  "architecture",
  "wallet",
  "pool",
  "end",
];

export const Tutorial = () => {
  const [step, setStep] = useState(0);

  const isFirstStep = step == 0;
  const isLastStep = step === STEPS.length -1;

  const prevStep = () => setStep(isFirstStep ? 0 : step - 1);
  const nextStep = () => setStep(isLastStep ? step : step + 1);

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
      <Step markdownPath={STEPS[step]} />

      <Row gutter={16} style={{ marginTop: "40px" }}>
        {!isFirstStep && <Col span={isLastStep ? 24 : 12}><Button type="primary" block icon={<ArrowLeftOutlined />} onClick={prevStep}>Prev</Button></Col>}
        {!isLastStep && <Col span={isFirstStep ? 24 : 12}><Button type="primary" block onClick={nextStep}><Space>Next<ArrowRightOutlined /></Space></Button></Col>}
      </Row>

    </div>
  )
}