import React from "react";
import BaseNode from "./BaseNode";

export default function MathNode() {
  return (
    <BaseNode title="Math Node" inputs={["input"]} outputs={["output"]}>
      <div>Math operation</div>
    </BaseNode>
  );
}
