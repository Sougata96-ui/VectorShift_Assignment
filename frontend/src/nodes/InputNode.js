// InputNode.js
import React from 'react';
import NodeBase from './NodeBase';

const InputNode = (props) => (
  <NodeBase title="📥 Input" type="input" outputs={[{ id: 'output' }]} {...props}>
    <div>Data input source</div>
  </NodeBase>
);

export default InputNode;
