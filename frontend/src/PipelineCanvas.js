import React, { useState, useCallback } from "react";
import ReactFlow, { Background, Controls, MiniMap, addEdge } from "reactflow";
import "reactflow/dist/style.css";

import InputNode from "./nodes/InputNode";
import OutputNode from "./nodes/OutputNode";
import TextNode from "./nodes/TextNode";
import LLMNode from "./nodes/LLMNode";

import MathNode from "./nodes/MathNode";
import ApiNode from "./nodes/ApiNode";
import DelayNode from "./nodes/DelayNode";
import FilterNode from "./nodes/FilterNode";
import LoggerNode from "./nodes/LoggerNode";

import { submitPipeline } from "./submit";

const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
  textNode: TextNode,
  llmNode: LLMNode,
  mathNode: MathNode,
  apiNode: ApiNode,
  delayNode: DelayNode,
  filterNode: FilterNode,
  loggerNode: LoggerNode
};

export default function PipelineCanvas() {

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const addNode = (type) => {

    const newNode = {
      id: Date.now().toString(),
      type,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400
      },
      data: {}
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div style={{ height: "100%" }}>

      <div className="toolbar">

        <button onClick={() => addNode("inputNode")}>Input</button>
        <button onClick={() => addNode("textNode")}>Text</button>
        <button onClick={() => addNode("llmNode")}>LLM</button>
        <button onClick={() => addNode("mathNode")}>Math</button>
        <button onClick={() => addNode("apiNode")}>API</button>

        <button
          className="submit-btn"
          onClick={() => submitPipeline(nodes, edges)}
        >
          Submit Pipeline
        </button>

      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>

    </div>
  );
}