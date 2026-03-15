import React from "react";
import BaseNode from "./BaseNode";

export default function DelayNode() {
  return (
    <BaseNode title="Delay Node" inputs={["input"]} outputs={["output"]}>
      <div>Delay processing</div>
    </BaseNode>
  );
}
