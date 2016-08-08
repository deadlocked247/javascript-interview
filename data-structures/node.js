export default class Node {
  constructor (val) {
    this.edges = [];
    this.next = null;
  }
  addEdge (edge) {
    this.edges.push(edge);
  }
}
