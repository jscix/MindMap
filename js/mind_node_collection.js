// At least one MindNodeCollection is present on any view
// Multiple collections with different root nodes can exist in the same view

MindNode.Collection = function(nodes, root) {
  this.nodes = nodes;
  this.root = root;
}
// root node
// Sorting - alpha/timestamps (can only sort under a common parent)
