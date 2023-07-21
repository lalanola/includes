const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [1, 2, 3];

let includes = true;
for (element of arr2) {
  if (!arr1.includes(element)) {
    includes = false;
    break;
  }
}
if(includes){
    console.log("arr1にarr2の全ての要素は含まれている")
}
else{
    console.log("arr1にarr2の全ての要素は含まれてない")
}
