function quickSort(array,left,right){
	if(left<right){	
		var base = array[right];var i = left-1;
		for(j=left;j<=right;j++){
			
			if(array[j]<=base){
				i++;
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
		quickSort(array,left,i-1);
		quickSort(array,i+1,right);
	}
}
/*Test
var array = [5,3,1];
quickSort(array,0,2);
console.log(array);
*/