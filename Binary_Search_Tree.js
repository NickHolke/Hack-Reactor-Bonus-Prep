function BinaryTree() {
    this.root = null;
}

function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;

}

BinaryTree.prototype.addValue = function(num) {
    let newNode = new TreeNode(num);
    if (this.root === null) {
        this.root = newNode;
    } else {
        this.root.addNode(newNode);
    }
}

TreeNode.prototype.addNode = function(node) {
    if (node.val < this.val) {
        if (this.left === null) {
            this.left = node;
        } else {
            this.left.addNode(node);
        }
    } else if (node.val > this.val) {
        if (this.right === null) {
            this.right = node;
        } else {
            this.right.addNode(node);
        }
    }
}

