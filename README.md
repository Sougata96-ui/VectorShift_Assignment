
# VectorShift Assignment

## Aim & Overview

This repository contains a full-stack solution for the VectorShift assignment. The goal is to provide a visual pipeline editor (frontend) and a backend validator, allowing users to create, connect, and submit node-based pipelines, and receive backend validation (including DAG checks).

- **Frontend:** Built with React and React Flow, lets users visually create and connect nodes (Input, Output, LLM, Text, Math, Condition, API, Delay, Log). The Text node auto-resizes and dynamically adds input handles for variables in double curly brackets (e.g., `{{variable}}`).
- **Backend:** Built with FastAPI (Python), receives pipeline data, counts nodes and edges, and checks if the pipeline forms a Directed Acyclic Graph (DAG).

## How It Works

1. **Node Abstraction:** All node types use a simple, reusable NodeBase component for easy extension and consistent styling.
2. **Dynamic Text Node:** The Text node auto-resizes as you type and adds input handles for variables written as `{{variable}}` in the text.
3. **Unified Styling:** All nodes and UI elements use a clean, modern, and readable design.
4. **Backend Integration:** On submit, the pipeline structure is sent to the backend, which returns the number of nodes, edges, and whether the pipeline is a DAG. Results are shown in a user-friendly alert.

## Code Structure

- `frontend/` – React app for the pipeline editor
	- `src/nodes/NodeBase.js` – Core abstraction for all nodes
	- `src/nodes/[NodeType]Node.js` – Each node type as a simple wrapper
	- `src/nodes/TextNode.js` – Special node for text/variables
	- `src/App.js` – Main React component and pipeline logic
	- `src/submit.js` – API call to backend
	- `src/nodes/nodeStyles.css` – Unified CSS for nodes
- `backend/` – FastAPI server for validation
	- `main.py` – API endpoint and DAG check logic
	- `requirements.txt` – Python dependencies

## Setup

See the `frontend/README.md` and `backend/README.md` for detailed setup instructions for each part.

## Usage

- Run the backend and frontend as described in their respective README files.
- Create and connect nodes visually in the frontend.
- Click "Submit Pipeline" to send the pipeline to the backend and receive validation results (number of nodes, edges, and DAG status).

---

For more details, see the full code and documentation in this repository.
