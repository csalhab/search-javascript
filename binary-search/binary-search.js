// Recursion approach to binary search (sorted array is a given/must)
let recursiveFunction = function (arr, x, start, end) {
  // base condition
  if (start > end) return false;

  // find the middle index
  let mid = Math.floor((start + end) / 2);

  // compare mid with given key x
  if (arr[mid] === x) return true;

  // if element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
  // if element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveFunction(arr, x, mid + 1, end);
};

// array and number being searched
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1))
  console.log("number " + x + " found!");
else console.log("number " + x + " not found!");

x = 6;

if (recursiveFunction(arr, x, 0, arr.length - 1))
  console.log("number " + x + " found!");
else console.log("number " + x + " not found!");

//Iterative approach instead of the above recursion.
//Iterative approach uses a while loop and the loop will run until it hits the base condition i.e start becomes greater than end.

// Iterative function to implement binary search
let iterativeFunction = function (arr2, y) {
  let start = 0,
    end = arr2.length - 1;

  // iterate while start not meets end
  while (start <= end) {
    // find the middle index
    let mid = Math.floor((start + end) / 2);

    // if element is present at middle, return true
    if (arr2[mid] === y) return true;
    // else look in left or right half respectively
    else if (arr2[mid] < y) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};

// array and number being searched
let arr2 = [1, 3, 5, 7, 8, 9];
let y = 5;

if (iterativeFunction(arr2, y, 0, arr2.length - 1))
  console.log("number " + y + " found!");
else console.log("number " + y + " not found!");

y = 6;

if (iterativeFunction(arr2, y, 0, arr2.length - 1))
  console.log("number " + y + " found!");
else console.log("number " + y + " not found!");
