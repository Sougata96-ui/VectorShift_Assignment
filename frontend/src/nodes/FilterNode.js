import React from "react";
import BaseNode from "./BaseNode";

export default function FilterNode() {
  return (
    <BaseNode title="Filter Node" inputs={["input"]} outputs={["output"]}>
      <div>Filter data</div>
    </BaseNode>
  );
}