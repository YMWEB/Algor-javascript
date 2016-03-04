function searchValue(root,value){
	if(root == null) return;
	if(root.value == value){	
		console.log(value);
	}
	else{
		searchValue(root.left,value);
		searchValue(root.right,value);
	}
}

/* Test 
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
*/
//searchValue(root,'2');