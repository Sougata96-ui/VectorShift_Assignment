// DelayNode.js
import React, { useState } from 'react';
import NodeBase from './NodeBase';

const DelayNode = (props) => {
  const [delay, setDelay] = useState(1);
  return (
    <NodeBase title="⏱️ Delay" type="delay" inputs={[{ id: 'input' }]} outputs={[{ id: 'output' }]} {...props}>
      <input
        type="number"
        min={1}
        value={delay}
        onChange={e => setDelay(e.target.value)}
        placeholder="Delay (s)"
        style={{ width: '100%' }}
      />
    </NodeBase>
  );
};

export default DelayNode;
