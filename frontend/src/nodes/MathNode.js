// MathNode.js
import React, { useState } from 'react';
import NodeBase from './NodeBase';

const MathNode = (props) => {
  const [expression, setExpression] = useState('');
  return (
    <NodeBase title="🔢 Math" type="math" inputs={[{ id: 'input1' }, { id: 'input2' }]} outputs={[{ id: 'result' }]} {...props}>
      <input
        type="text"
        value={expression}
        onChange={e => setExpression(e.target.value)}
        placeholder="e.g. a + b"
        style={{ width: '100%' }}
      />
    </NodeBase>
  );
};

export default MathNode;
