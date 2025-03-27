function sumArray(num) {
  return num.reduce((total, number) => total + number, 0); 
  //using reduce method to add each elements within the array to get the total sum.
}

console.log(sumArray([1, 2, 3, 4, 5]));  //This should return 15 (1 + 2 + 3 + 4 + 5)
