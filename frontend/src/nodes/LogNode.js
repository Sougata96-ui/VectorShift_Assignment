// LogNode.js
import React from 'react';
import NodeBase from './NodeBase';

const LogNode = (props) => (
  <NodeBase title="Log" inputs={[{ id: 'input' }]} {...props}>
    <div>Logs the input value</div>
  </NodeBase>
);

export default LogNode;
