
function minDepth(node){
	if( node === null){
		return 0;
	}
	return 1+Math.min(minDepth(node.left),minDepth(node.right));	
}
function maxDepth(node){
	if(node === null){
		return 0;
	}
	return 1+Math.max(maxDepth(node.left),maxDepth(node.right));
}

function isBinaryTreeBalanced(root){
	if( root === null){return false;}
	return maxDepth(root)-minDepth(root)<=1;
}

function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}
function buildTree(){
	var root = new Node(1);
	root.left = new Node(2);
	root.right = new Node(3);
	root.left.left = new Node(4);
	root.left.left.left= new Node(5);
	
	return root;
};
var root = buildTree();

isBinaryTreeBalanced(root);