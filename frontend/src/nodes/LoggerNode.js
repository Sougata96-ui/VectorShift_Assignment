import React from "react";
import BaseNode from "./BaseNode";

export default function LoggerNode() {
  return (
    <BaseNode title="Logger Node" inputs={["input"]} outputs={["output"]}>
      <div>Log data</div>
    </BaseNode>
  );
}