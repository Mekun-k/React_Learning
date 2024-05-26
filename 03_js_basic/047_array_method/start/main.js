const arry = [10, 20, 30, 40];
const newArry = [];

const newArry2 = arry.map(val => val * 2).filter(val => val > 50);
console.log(newArry2);

// rubyの場合    arry.map { |val| val * 2 }
// JSの場合      arry.map(val => val * 2)

