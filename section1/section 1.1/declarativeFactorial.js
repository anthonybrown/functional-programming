const factorial = (num) => {
  return num <= 1 ? 1 : num * factorial( num - 1);
}

console.log(`this is the declarative answer ${factorial(6)}`)
