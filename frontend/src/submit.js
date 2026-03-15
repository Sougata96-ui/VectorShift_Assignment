export async function submitPipeline(nodes, edges) {

  const response = await fetch(

    "http://localhost:8000/pipelines/parse",

    {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        nodes,

        edges

      })

    }

  );

  const result = await response.json();

  alert(`

Pipeline Analysis

Nodes: ${result.num_nodes}

Edges: ${result.num_edges}

DAG: ${result.is_dag ? "Valid Pipeline" : "Cycle Detected"}

`);

}
