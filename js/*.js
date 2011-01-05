// PARTS of Snap

// text - auto-hyperlinked
// arbitrary additional fields
// create/modify timestamps
// bgColor
// fgColor
// Style
// Shape
//   Create default flowchart shapes, etc
// Position
// Parent
// Children
// Cousins (side nodes)

var Snap = {};
Snap.Node = function(opts) {
  for(prop in opts) {
    this[prop] = opts[prop];
  }
  this.children = [];
  this.cousins = [];
}
Snap.Node.prototype = {
  parent: null,
  addChild: function(node) {
		if(node.constructor != Snap)
			node = new Snap.Node(node);
    if(this.children.indexOf(node) != -1)
      return false;

    this.children.push(node);
    node.parent = this;
    return node;
  },
  // remove child at index i
  removeChild: function(node) {
    var nodeIndex = this.children.indexOf(node);

    node.parent = null;
    this.children.splice(nodeIndex, 1);
		return this;
  },
  addCousin: function(node) {
    if(this.cousins.indexOf(node) >= 0)
      return false;

    node.cousins.push(this);
    this.cousins.push(node);
    return true;
  },
  removeCousin: function(node) {
    var nodeIndex = this.cousins.indexOf(node),
        thisIndex = node.cousins.indexOf(this);
    
    if(nodeIndex < 0 || thisIndex < 0)
      return false;
    
    this.cousins.splice(nodeIndex, 1);
    node.cousins.splice(thisIndex, 1);
    return true;
  },
  isRoot: function() {
    return !this.parent;
  },
  getSiblings: function() {
    if(this.isRoot())
      return null;

    var children = this.parent.children,
        siblings = [],
        child;

    for(i = 0, j = children.length; i < j; i++) {
      child = children[i];
      if(child != this)
        siblings.push(child);
    }

    return siblings;
  },
	notifySubscribers: function() {
		if(this.collection)
			this.collection.notifySubscribers();
	}
};
