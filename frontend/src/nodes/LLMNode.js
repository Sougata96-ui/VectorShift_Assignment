import React from "react";
import BaseNode from "./BaseNode";

export default function LLMNode() {
  return (
    <BaseNode title="LLM Node" inputs={["input"]} outputs={["output"]}>
      <div>LLM processing</div>
    </BaseNode>
  );
}

export default LLMNode;
