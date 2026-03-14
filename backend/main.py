from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.post("/pipelines/parse")
async def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)
    is_dag = check_dag(data.nodes, data.edges)
    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}

def check_dag(nodes, edges):
    from collections import defaultdict, deque
    graph = defaultdict(list)
    indegree = defaultdict(int)
    for node in nodes:
        indegree[node['id']] = 0
    for edge in edges:
        graph[edge['source']].append(edge['target'])
        indegree[edge['target']] += 1
    queue = deque([n for n in indegree if indegree[n] == 0])
    visited = 0
    while queue:
        node = queue.popleft()
        visited += 1
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    return visited == len(nodes)
