/*
1!=1
2!=1*2
3!=1*2*3
4!=1*2*3*4
5!=1*2*3*4*5
*/
function factorial(n){
	if(n>0)
	return (factorial(n-1)*n);
	return(1);
}
console.log(factorial(8));