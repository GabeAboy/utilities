function functionName(array , n) {
  if(!n)return 0;
  var ret = array.slice(-n);

  return ret;
}
console.log(functionName([1,2,3,4],1));
