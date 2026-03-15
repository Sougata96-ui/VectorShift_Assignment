// ConditionNode.js
import React, { useState } from 'react';
import NodeBase from './NodeBase';

const ConditionNode = (props) => {
  const [condition, setCondition] = useState('');
  return (
    <NodeBase title="🔀 Condition" type="condition" inputs={[{ id: 'input' }]} outputs={[{ id: 'true' }, { id: 'false' }]} {...props}>
      <input
        type="text"
        value={condition}
        onChange={e => setCondition(e.target.value)}
        placeholder="e.g. x > 5"
        style={{ width: '100%' }}
      />
    </NodeBase>
  );
};

export default ConditionNode;
