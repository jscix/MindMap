// At least one MindNodeCollection is present on any view
// Multiple collections with different root nodes can exist in the same view

MindNode.Collection = function(root) {
  switch(typeof root) {
    case "object":
      if(!(root instanceof MindNode))
        root = new MindNode(root);
      break;
    default:
      root = new MindNode({});
  }
  this.root = root || new MindNode({});
  this.selected = this.root;
};
MindNode.Collection.prototype = {
  addChild: function(node) {
    return this.selected.addChild(node);
  },
  addSibling: function(node) {
    if(!this.selected.isRoot())
      this.selected.parent.addChild(node);
    
    return false;
  },
  // returns new Collection
  breakOff: function(node) {
    node.parent.removeChild(node);
    return new MindNode.Collection(node);
  }
};
// root node
// Sorting - alpha/timestamps (can only sort under a common parent)
