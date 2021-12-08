# Search - Javascript

## Description

Javascript Searches Information.

## Table of Contents

- [Description](#description)
- [Linear Search](#linear-search)
- [Binary Search](#binary-search)

---

## Linear Search

...

---

## Binary Search

Given that array is sorted.

Divide and conquer approach.

Recursion used.

If starting index is greater than ending index return false.

Determine the middle index using:
Math.floor((start + end) / 2)

Compare the middle element with number x. If equal return true.

If element at middle is greater than x, then search in the left half of array by calling the same function/recursion with the ending array being middle-1.

If element at middle is smaller x, then search in the right half of the array by calling the same function/recusion with the starting point of the array at middle+1.

Big O (Time Complexity): O(logN)

---

© 2021 All Rights Reserved.
