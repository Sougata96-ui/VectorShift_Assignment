// App.js
import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';
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
  { id: '1', type: 'input', position: { x: 50, y: 50 }, data: {} },
  { id: '2', type: 'text', position: { x: 250, y: 50 }, data: {} },
  { id: '3', type: 'output', position: { x: 450, y: 50 }, data: {} },
];
const initialEdges = [];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div style={{ height: '100vh', background: '#f4f8fb' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={setNodes}
        onEdgesChange={setEdges}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      <button
        style={{ position: 'absolute', right: 20, top: 20, padding: '10px 20px', background: '#4f8cff', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}
        onClick={() => submitPipeline(nodes, edges)}
      >
        Submit Pipeline
      </button>
    </div>
  );
}

export default App;
