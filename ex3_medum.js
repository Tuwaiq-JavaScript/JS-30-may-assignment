function lcm(n1,n2){
  let l = Math.max(n1, n2);
  let s = Math.min(n1, n2);
  let i = l;
  while(i % s !== 0){
    i += l;
    return i  }
}

lcm(20,15)




