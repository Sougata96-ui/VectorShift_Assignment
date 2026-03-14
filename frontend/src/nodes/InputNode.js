// InputNode.js
import React from 'react';
import NodeBase from './NodeBase';

const InputNode = (props) => (
  <NodeBase title="Input" outputs={[{ id: 'output' }]} {...props}>
    <div>Input node content</div>
  </NodeBase>
);

export default InputNode;
