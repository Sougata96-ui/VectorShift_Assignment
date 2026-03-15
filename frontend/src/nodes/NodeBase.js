// NodeBase.js
// Abstract base component for all node types
import React from 'react';
import { Handle } from 'reactflow';
import './nodeStyles.css';

const NodeBase = ({ title, children, inputs = [], outputs = [], style = {}, className = '', type = 'default' }) => {
  const nodeClasses = `node-base node-${type} ${className}`;
  return (
    <div className={nodeClasses} style={style}>
      <div className="node-header">
        <div className="node-title">{title}</div>
      </div>
      {inputs.map((input, idx) => (
        <Handle key={idx} type="target" position="left" id={input.id} style={input.style} className="handle-input" />
      ))}
      <div className="node-content">{children}</div>
      {outputs.map((output, idx) => (
        <Handle key={idx} type="source" position="right" id={output.id} style={output.style} className="handle-output" />
      ))}
    </div>
  );
};

export default NodeBase;
