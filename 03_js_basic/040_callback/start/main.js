function print(fn) {
  const result = fn(9);
  console.log(result);
}

function fn(number = 3) {
  return number * 2
}

print(fn)