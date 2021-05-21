import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

export const Tip = ({
  title,
  content,
}: {
  title: string;
  content: JSX.Element;
}) => {
  return (
    <Collapse
      className="tip"
      bordered={true}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{ marginBottom: "20px" }}
    >
      <Panel header={title} key="1" className="site-collapse-custom-panel">
        {content}
      </Panel>
    </Collapse>
  )
}