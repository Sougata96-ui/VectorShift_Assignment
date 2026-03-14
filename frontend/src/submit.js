// submit.js
export async function submitPipeline(nodes, edges) {
  try {
    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges })
    });
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    alert(`Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag ? 'Yes' : 'No'}`);
    return data;
  } catch (err) {
    alert('Submission failed: ' + err.message);
    return null;
  }
}
