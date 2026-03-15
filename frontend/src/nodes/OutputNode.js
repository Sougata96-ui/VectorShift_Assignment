import React from "react";
import BaseNode from "./BaseNode";

export default function OutputNode() {
  return (
    <BaseNode title="Output Node" inputs={["input"]}>
      <div>Output result</div>
    </BaseNode>
  );
}

export default OutputNode;
