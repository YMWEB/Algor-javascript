function createLinkList(){
	var _this = {},
	prev = null;
	return {
		add：function(val){
			prev = {
				data:val,
				next:prev||null
			}
		}
	}
}
var linksList = createLinkList();
linksList.add("arron1");
linksList.add("arron2");
linksList.add("arron3");

var findNode = function createFindNode(currNode){
	return function(key){
		while (currNode.data != key){
			currNode = currNode.next;
		}
		return currNode;
	}
}(headNode);