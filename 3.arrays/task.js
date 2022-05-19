function compareArrays(arr1, arr2) {

 if (arr1.length === arr2.length) {
   return arr1.every((value, index) => value === arr2[index])
 }
 else return false

}

function advancedFilter(arr) {
  let resultArr1 = arr.filter(function(value) {
    return value % 3 == 0 && value >0;
  });
  let resultArr = resultArr1.map(function(value) {
    return value * 10;
  })
 
  

  // Ваш код

  return resultArr; // array
}
