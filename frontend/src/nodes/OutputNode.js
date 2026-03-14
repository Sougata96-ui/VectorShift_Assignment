// OutputNode.js
import React from 'react';
import NodeBase from './NodeBase';

const OutputNode = (props) => (
  <NodeBase title="Output" inputs={[{ id: 'input' }]} {...props}>
    <div>Output node content</div>
  </NodeBase>
);

export default OutputNode;
