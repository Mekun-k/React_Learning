
function fn(number) {
  return number * 2;
}
console.log(fn(2));

// アロー関数
const fnArrow = (number) => {
  number * 2;
}
console.log(fn(2));

// 1行の場合は省くことができる
const fnArrow2 = number => number * 2;
console.log(fn(2));
