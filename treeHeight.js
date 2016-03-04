function getHeight(root){
	if(root==null){ 
		return 0
	}else{
		return Math.max(getHeight(root.left),getHeight(root.right))+1;

	}
}

/*Test
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
	root.left.right = new Node(5);
	root.right.right = new Node(6);
	root.left.left.right = new Node(7);
	return root;
};
var root = buildTree();
getHeight(root) //4
*/
