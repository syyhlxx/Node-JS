/*
Queue (BFS):

Nodes are processed in the order they're discovered
All nodes at distance k are visited before nodes at distance k+1
When you visit a node, its neighbors are added to the back of the
queue and processed after other nodes already queued
This guarantees the breadth-first property—exploring all 
neighbors at the current level before moving deeper.
*/
const BreadthFirstSearch = (graph, startNode) => {
  const queue = [startNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);

    for (const neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
}

};
  
const graph = {   //                A
  A: ['B', 'C'],  //              ┌─┴─┐
  B: ['D', 'E'],  //              │   │
  C: ['F'],       //              B   C
  D: [],          //            ┌─┴─┐ │
  E: ['F'],       //            │   │ │
  F: []           //            D   E │
};                //                │ │               
                  //                └─┴─┐
                  //                    F

//recursiveDepthFirstSearch(graph, 'A');  // A, B, D, E, F, C
//DepthFirstSearch(graph, 'A');   // A, B, D, E, F, C 
BreadthFirstSearch(graph, 'A');   // A, B, 

