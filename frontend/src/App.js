// App.js
import React from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background, useNodesState, useEdgesState } from 'reactflow';
import InputNode from './nodes/InputNode';
import OutputNode from './nodes/OutputNode';
import LLMNode from './nodes/LLMNode';
import TextNode from './nodes/TextNode';
import MathNode from './nodes/MathNode';
import ConditionNode from './nodes/ConditionNode';
import ApiNode from './nodes/ApiNode';
import DelayNode from './nodes/DelayNode';
import LogNode from './nodes/LogNode';
import { submitPipeline } from './submit';
import './nodes/nodeStyles.css';

const nodeTypes = {
  input: InputNode,
  output: OutputNode,
  llm: LLMNode,
  text: TextNode,
  math: MathNode,
  condition: ConditionNode,
  api: ApiNode,
  delay: DelayNode,
  log: LogNode,
};

const initialNodes = [
  { id: '1', type: 'input', position: { x: 50, y: 50 }, data: {}, selectable: true, draggable: true },
  { id: '2', type: 'text', position: { x: 250, y: 50 }, data: {}, selectable: true, draggable: true },
  { id: '3', type: 'output', position: { x: 450, y: 50 }, data: {}, selectable: true, draggable: true },
];
const initialEdges = [];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">VectorShift Pipeline Editor</h1>
        <div className="header-sections">
          <div className="header-section">File</div>
          <div className="header-section">Edit</div>
          <div className="header-section">View</div>
          <div className="header-section">Help</div>
        </div>
      </header>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      <button
        className="submit-button"
        onClick={() => submitPipeline(nodes, edges)}
      >
        Submit Pipeline
      </button>
    </div>
  );
}

export default App;
