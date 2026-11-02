
hasPath = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
}

const graph = {
  F: ['G', 'I'],
  G: ['H', 'E'],
  H: ['F'],
  I: ['G','K'],
  J: ['I'],
  K: []
};