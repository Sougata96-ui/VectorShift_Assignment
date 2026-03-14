// LLMNode.js
import React from 'react';
import NodeBase from './NodeBase';

const LLMNode = (props) => (
  <NodeBase title="LLM" inputs={[{ id: 'input' }]} outputs={[{ id: 'output' }]} {...props}>
    <div>LLM node content</div>
  </NodeBase>
);

export default LLMNode;
