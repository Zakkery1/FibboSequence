function fibb(num) {
    console.log("Non-Recursive")
    let x = 0;
    let y = 1;
    console.log(x);
    console.log(y);
    for (let i = 0; i <= num; i++) {
      let j = x + y;
      x = y;
      y = j;
      console.log(j);
    }
  }
  
fibb(20);

console.log(0)
console.log(1)
console.log("Recursive")
function fibbSeq(x, y, count){
    let pre1 = x;
    let pre2 = y;
    if (count <= 20){
        count += 1
        let current = pre1 + pre2;
        pre1 = pre2;
        pre2 = current;
        console.log(current)
        fibbSeq(pre1, pre2, count)
    }
    else {
        return;
    }
}
fibbSeq(0, 1, 1)



