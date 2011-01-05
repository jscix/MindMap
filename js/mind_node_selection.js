// represents arbitrary selection of nodes to move around in view, perform other bulk editing on
// (change color/shape/styling)

Snap.Selection = function(nodes) {
  this.nodes = nodes;
};
Snap.Selection.prototype = {
  set: function(key, val) {
    for(var i = 0, j = this.nodes.length; i < j; i++) {
      this.nodes[i][key] = val;
    }
  },
  unset: function(key) {
    for(var i = 0, j = this.nodes.length; i < j; i++) {
      delete this.nodes[i][key];
    }
  }
};
