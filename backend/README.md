# VectorShift Assignment – Backend

## Aim & Project Overview

This backend provides a FastAPI server for validating node-based pipelines created in the VectorShift frontend. It receives pipeline data, counts nodes and edges, and checks if the pipeline forms a Directed Acyclic Graph (DAG).

**Key Features:**
- **/pipelines/parse endpoint:** Accepts a JSON payload with nodes and edges, returns the number of nodes, number of edges, and whether the pipeline is a DAG.
- **CORS enabled:** Allows requests from the frontend during development.
- **Simple, readable code:** The DAG check uses a standard Kahn's algorithm for cycle detection.

## Code Structure & Explanation

- **main.py:**
  - Defines the FastAPI app and CORS middleware.
  - `PipelineData` model validates incoming pipeline data.
  - `/pipelines/parse` endpoint processes the pipeline and returns results.
  - `check_dag` function implements a simple topological sort to check for cycles.

## Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Start the FastAPI server:
   ```
   uvicorn main:app --reload
   ```

The API will be available at http://localhost:8000
