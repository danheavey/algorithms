function getFib(it){
  let n0 = 0
  let n1 = 1;
  for(let i =0;  i<it; i++) {
    console.log(n0 + n1);
    let temp = n1 
    n1 = n0 + n1;
    n0 = temp;
  }
}

getFib(20)