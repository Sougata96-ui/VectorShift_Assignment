import React, { useState, useEffect } from "react";
import BaseNode from "./BaseNode";

export default function TextNode() {

  const [text, setText] = useState("");
  const [vars, setVars] = useState([]);

  useEffect(() => {

    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...text.matchAll(regex)];
    const variables = [...new Set(matches.map((m) => m[1]))];

    setVars(variables);

  }, [text]);

  return (
    <BaseNode title="Text Node" inputs={vars} outputs={["output"]}>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: Math.max(150, text.length * 6),
          minHeight: 60
        }}
      />

    </BaseNode>
  );
}
