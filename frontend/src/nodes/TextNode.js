// TextNode.js
import React, { useState } from 'react';
import NodeBase from './NodeBase';


const getVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }
  return Array.from(vars);
};

const TextNode = (props) => {
  const [text, setText] = useState('');
  const [size, setSize] = useState({ width: 180, height: 60 });
  const variables = getVariables(text);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    // Simple auto-resize: width grows with longest line, height with line count
    const lines = value.split('\n');
    const longest = Math.max(...lines.map(l => l.length), 10);
    setSize({
      width: Math.min(400, Math.max(180, longest * 8)),
      height: Math.min(300, Math.max(60, lines.length * 22)),
    });
  };

  const inputHandles = [
    { id: 'input' },
    ...variables.map(v => ({ id: v })),
  ];

  return (
    <NodeBase
      title="📝 Text"
      type="text"
      inputs={inputHandles}
      outputs={[{ id: 'output' }]}
      style={{ width: size.width, minHeight: size.height }}
      {...props}
    >
      <textarea
        value={text}
        onChange={handleChange}
        style={{ width: '100%', minHeight: size.height - 20, resize: 'none' }}
        placeholder="Enter text..."
      />
    </NodeBase>
  );
};

export default TextNode;
