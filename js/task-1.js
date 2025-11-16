function isEnoughCapacity(products, containerSize) {
  let total = 0;
  for (const key in products) {
    total += products[key];
  }
  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 10)); // true
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 6)); // true
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 5)); // false
console.log(isEnoughCapacity({ carrots: 3, tomatoes: 5, cucumbers: 2 }, 12)); // true
console.log(isEnoughCapacity({ carrots: 3, tomatoes: 5, cucumbers: 2 }, 9)); // false
