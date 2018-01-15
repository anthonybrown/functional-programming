const factorial = (n) => {
  let result = 1;
  while ( n > 1 ) {
    result *= n;
    n -= 1;
    console.log(result);
  }

  return result;
}

console.log( `The result is: ${factorial(6)}`)
