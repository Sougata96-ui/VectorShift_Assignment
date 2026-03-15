import React from "react";
import BaseNode from "./BaseNode";

export default function ApiNode() {
  return (
    <BaseNode title="API Node" inputs={["input"]} outputs={["output"]}>
      <div>API call</div>
    </BaseNode>
  );
}
