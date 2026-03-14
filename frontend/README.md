
# VectorShift Assignment – Frontend

## Aim & Project Overview

This project is a full-stack pipeline editor and validator, built for the VectorShift assignment. The goal is to allow users to visually create, connect, and submit node-based pipelines, and receive backend validation (including DAG checks). The frontend is built with React and React Flow, and the backend uses Python with FastAPI.

**Key Features:**
- **Node Abstraction:** All node types (Input, Output, LLM, Text, Math, Condition, API, Delay, Log) are built using a simple, reusable NodeBase component for easy extension and consistent styling.
- **Dynamic Text Node:** The Text node auto-resizes as you type and dynamically adds input handles for variables written as `{{variable}}` in the text.
- **Unified Styling:** All nodes and UI elements use a clean, modern, and readable design.
- **Backend Integration:** On submit, the pipeline structure is sent to the backend, which returns the number of nodes, edges, and whether the pipeline is a Directed Acyclic Graph (DAG). Results are shown in a user-friendly alert.

## Code Structure & Explanation

- **src/nodes/NodeBase.js:** The core abstraction for all nodes. Handles rendering of node title, content, and input/output handles.
- **src/nodes/[NodeType]Node.js:** Each node type (Input, Output, LLM, etc.) is a simple wrapper around NodeBase, passing its own title and handle configuration.
- **src/nodes/TextNode.js:** Special node that auto-resizes and parses variables in double curly brackets, adding input handles for each variable found.
- **src/App.js:** Main React component. Sets up the React Flow canvas, node types, and handles pipeline state. The submit button sends the pipeline to the backend and displays the result.
- **src/submit.js:** Handles the API call to the backend and displays the result in an alert.
- **src/nodes/nodeStyles.css:** Unified CSS for all nodes.

## Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

The app will be available at http://localhost:3000
