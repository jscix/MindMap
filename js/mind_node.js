// PARTS of MindNode

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

function MindNode(opts) {}
MindNode.prototype = {
  addChild: function() {},
  // remove child at index i
  removeChild: function(i) {},
  reassignParent: function(newParent) {}
};
