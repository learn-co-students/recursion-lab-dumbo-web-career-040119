function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    // console.log(mySubString);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  console.log(myString);
  if (myString.length <= 0) {
    return myString;
  } else {
    console.log(myString.substring(1) + myString[0])
    return reverseString(myString.substring(1)) + myString[0];
  }
}
function isPalindrome(str){
  let l = str.length
  if (l < 2) {
    return true
  } else if (str[l -1] === str[0]) {
    console.log(l);
    return isPalindrome(str.substring(1, (l - 1)))
  } else{
    return false
  }
}

function addUpTo(arr, idx) {
  return idx ? arr[idx] + addUpTo(arr, --idx) : arr[idx]
}

function maxOf(arr) {

  if (arr.length <= 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr, el) {

  if (!arr.length) {
    return false
  } else if (arr[0] === el){
    return true
  } else {
    return includesNumber(arr.slice(1), el)
  }
}
