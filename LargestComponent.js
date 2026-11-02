/*  
      (5) Largest Component
       |
(1)---(0)---(8)   

(4)---(2)
  \   /  
   (3)

*/
const largestComponent = (graph) => {
    const graphObj = buildGraph(graph);
    const visited = new Set();
    let longest = 0;
    for (let node in graphObj) {
        const size = exploreSize(graphObj, node, visited);
        if (size > longest) longest = size;
    }
    return longest;
}

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;
    //Add the node to the visited set 
    // so we don't count it again.
    visited.add(node);
    let size = 1;
    for (let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }
    return size;
}

const buildGraph = (edges) => {
        const graph = {};
        for (let edge of edges) {
            const [a, b] = edge;
            if (!(a in graph)) graph[a] = [];
            if (!(b in graph)) graph[b] = [];
            //Because this is an undirected graph, we need to add the 
            // edge in both directions. If a and b are connected, 
            // then b and a are also connected.
            graph[a].push(b);
            graph[b].push(a);
        }
        return graph;
    }

const edges = [     //     (I) ---- (J)             graph looks like this:
   ['I','J'],       //      |                       I:	[J,K]
   ['K', 'I'],      //      |                       J:	[ I ]
   ['M','K'],       //     (K) ---- (L)             K:	[I,M,L]
   ['K','L'],       //      |                       M:	[K]
   ['O','N']        //      |                       L:	[K]
   ];               //     (M)      (0)----(N)      O:	[N]
                    //                              N:	[O]
   
   
    console.log(largestComponent(edges));   
