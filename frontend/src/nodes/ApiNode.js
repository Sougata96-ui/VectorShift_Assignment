// ApiNode.js
import React, { useState } from 'react';
import NodeBase from './NodeBase';

const ApiNode = (props) => {
  const [endpoint, setEndpoint] = useState('');
  return (
    <NodeBase title="🌐 API" type="api" inputs={[{ id: 'input' }]} outputs={[{ id: 'output' }]} {...props}>
      <input
        type="text"
        value={endpoint}
        onChange={e => setEndpoint(e.target.value)}
        placeholder="API endpoint"
        style={{ width: '100%' }}
      />
    </NodeBase>
  );
};

export default ApiNode;
