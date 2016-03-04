function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function buildTree(root,node){
	if(root == null){return}
		if(root.value < node.value){
			if(root.right == null){
				root.right = node;
			}else{
				buildTree(root.right,node);

			}
		}
		else{
			if(root.left == null){
				root.left = node;
			}else{
				buildTree(root.left,node);
			}
		}
}
var array = [8,5,2,1,9];
var length = array.length;
var root = new Node(array[0]);
for (i=1;i<length;i++){
	var node = new Node(array[i]);
	buildTree(root,node);
}
//console.log(root)