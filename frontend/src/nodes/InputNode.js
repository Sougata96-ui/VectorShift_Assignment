import React from "react";
import BaseNode from "./BaseNode";

export default function InputNode() {
  return (
    <BaseNode title="Input Node" outputs={["output"]}>
      <input placeholder="Enter value" />
    </BaseNode>
  );
}

export default InputNode;
