import React from "react";
import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children
}) {
  return (
    <div className="node">

      <div className="node-header">{title}</div>

      {inputs.map((id, i) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 50 + i * 20 }}
        />
      ))}

      <div className="node-body">{children}</div>

      {outputs.map((id, i) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 50 + i * 20 }}
        />
      ))}

    </div>
  );
}
