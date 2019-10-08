function getFactorial(n){
  return (n * getFactorial(n - 1));
}
console.log(getFactorial(4));

