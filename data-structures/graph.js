import Node from './node';

Array.prototype.contains = function(name) {
  let i = this.length;
  while (i--) {
    if (this[i].name === name) {
      return true;
    }
  }
  return false;
}

class Graph {
  constructor () {
    this.nodes = [];
  }
  addEdge (start, end) {
    const first = this.nodes.contains(start);
    const second = this.nodes.contains(end);
    if (first) {
      let i = this.nodes.length;
      while (i--) {
        if (this.nodes[i].name === start) {
          this.nodes[i].addEdge(end);
          break;
        }
      }
    }
    if (second){
      i = this.nodes.length;
      while (i--) {
        if (this.nodes[i].name === end) {
          this.nodes[i].addEdge(start);
          break;
        }
      }
    }

    if ((!first) || (!second)) {
      if (!first) {
        const node = new Node(start);
        node.addEdge(end);
        this.nodes.push(node);
      }
      if (!second) {
        const node = new Node(end);
        node.addEdge(start);
        this.node_list.push(node);
      }
    }
  }
  print () {
    for (let i = 0; i < this.nodes.length; i++) {
      console.log(this.nodes[i].name + ": ");
      console.log(this.nodes[i].edges);
    }
  }
}
