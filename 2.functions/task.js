// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let sum = 0;
  let avg;
  for (let i=0; i < arr.length; i++) {
    if ((arr[i]) < min) {
      min = arr[i];
    } 
    else if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
    avg = +((sum / (arr.length)).toFixed(2));

  }

  return { min: min, max: max, avg: avg };
}

// Задание 2
let func = function worker(arr) {
  let sum;
  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  for(let j=o; j < arrOfArr.length; j++) {
    if ((arrOfArr[j]) > max) {
      max = arrOfArr[j];
    }
  }

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
