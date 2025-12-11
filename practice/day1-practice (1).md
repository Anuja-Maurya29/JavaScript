# JavaScript Fundamentals - Day 1 Assignments

## 1. Student Scores & do...while
```js
const students = [
  { name: "Alice", marks: 40 },
  { name: "Bob", marks: 65 },
  { name: "Charlie", marks: 80 }
];

// 1. Print names of students who scored more than 50
// 2. Use a do...while loop to keep adding 5 to a score until it reaches 100
```
---

## 2. Variables (var, let, const)
```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); 
console.log(b); 
console.log(c);
```

**Questions:**
- Which variables are accessible outside the block? Why?
- Rewrite the code so that all three variables can be used outside the block without errors.

---

## 3. Operators
```js
let x = 7;
let y = 3;
console.log(x % y);    
console.log(x > y && y > 0);  
console.log(x < y || y > 0);  
console.log(!(x === y));  
```

**Questions:**
- What will each line output?
- Explain the difference between `&&` and `||`.
- Why does `!(x === y)` return true here?

---

## 4. Loops – For Loop
```js
const nums = [2, 4, 6, 8, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
}
```

**Questions:**
- What numbers will be printed?
- Rewrite the loop so it prints only odd numbers from 1 to 10.

---

## 5. Loops – do...while Loop
```js
let n = 1;
do {
  console.log("Number:", n);
  n++;
} while (n <= 5);
```

**Questions:**
- How many times will "Number:" be printed?
- Change the condition so that the loop always runs at least once, even if `n` starts from 10.

---

## 6. String Practice
```js
const text = "Hello World";
console.log(text.charAt(0));     
console.log(text[6]);           
console.log(text.substring(0, 5)); 
console.log(text.split(" "));    
console.log(`Message: ${text}`);  
```

**Questions:**
- What does `charAt(0)` return?
- What’s the difference between `substring` and `slice`?
- What will `split(" ")` return?
- Explain how string interpolation (using backticks `` ` ``) works.

---

## 7. FizzBuzz Lite
- Loop numbers 1 to 20.  
- Print `"Fizz"` for multiples of 3, `"Buzz"` for multiples of 5, `"FizzBuzz"` for multiples of both, else the number.

**Bonus:** Multiplication Table of any number using `for...in`  
Example (for 5):  
```
5 x 1 = 5  
5 x 2 = 10  
...  
5 x 10 = 50
```

---

## 8. Type Coercion (String Interpolation & Comparisons)
```js
console.log(1 + "2");     
console.log("2" * 3);     
console.log(0 == false);  
console.log(0 === false); 
console.log([] == false); 
console.log([] === false);

const num = 5;
const str = "5";
console.log(num == str);  
console.log(num === str); 
console.log(`${num + 5} is greater than ${str}`);  
```

**Questions:**
- What will each line output?
- Which comparisons use type coercion and which don’t?
- Why does `==` behave differently from `===`?
- In the last line, how does string interpolation handle numbers inside `${}`?

---

## 9. Compare Numbers
```js
let x1 = 5;
let y1 = "5";

console.log(x1 == y1);  
console.log(x1 === y1); 
console.log(x1 != y1);  
console.log(x1 !== y1); 
console.log(x1 > 3);    
console.log(x1 < 10);   
console.log(x1 >= 5);   
console.log(x1 <= 4);   
```

---

## 10. Hoisting
```js
sayHello();
console.log(x);
function sayHello() {
  console.log("Hello!");
}

var x = 5;
let y = 10;
```

**Questions:**
- What happens with `sayHello()`?
- What gets logged for `x`?
- What if you also add `console.log(y)` before declaration?