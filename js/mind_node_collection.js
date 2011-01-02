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
	this.listeners = [];
};
MindNode.Collection.prototype = {
	select: function(node) {
		this.selected = node;
		return node;
	},
  addChild: function(node) {
		return this.select(this.selected.addChild(node));
  },
  addSibling: function(node) {
    if(!this.selected.isRoot()) 
			return this.select(this.selected.parent.addChild(node));
    
    return false;
  },
	removeSelected: function() {
		var selected;
		if((selected = this.selected).isRoot())
			return false;

		return this.select(selected.parent.removeChild(selected));
	},
	subscribe: function(func) {
		this.listeners.push(func);
	},
	removeAllListeners: function(func) {
		this.listeners = [];
	},
	notifySubscribers: function() {
		var listeners = this.listeners,
				i = 0,
				j = listeners.length,
				listener;

		while(i < j) {
			listener = listeners[i];
			listener.call(this);
			i += 1;
		}
	}
};
