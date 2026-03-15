// OutputNode.js
import React from 'react';
import NodeBase from './NodeBase';

const OutputNode = (props) => (
  <NodeBase title="📤 Output" type="output" inputs={[{ id: 'input' }]} {...props}>
    <div>Data output destination</div>
  </NodeBase>
);

export default OutputNode;
