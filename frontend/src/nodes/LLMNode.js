// LLMNode.js
import React from 'react';
import NodeBase from './NodeBase';

const LLMNode = (props) => (
  <NodeBase title="🤖 LLM" type="llm" inputs={[{ id: 'input' }]} outputs={[{ id: 'output' }]} {...props}>
    <div>Language model processing</div>
  </NodeBase>
);

export default LLMNode;
