// NodeBase.js
// Abstract base component for all node types
import React from 'react';
import { Handle } from 'react-flow-renderer';
import './nodeStyles.css';

const NodeBase = ({ title, children, inputs = [], outputs = [], style = {}, className = '' }) => (
  <div className={`node-base ${className}`} style={style}>
    <div className="node-title">{title}</div>
    {inputs.map((input, idx) => (
      <Handle key={idx} type="target" position="left" id={input.id} style={input.style} />
    ))}
    <div className="node-content">{children}</div>
    {outputs.map((output, idx) => (
      <Handle key={idx} type="source" position="right" id={output.id} style={output.style} />
    ))}
  </div>
);

export default NodeBase;
