/*
## 1. Student Scores & do...while
```js
const students = [
  { name: "Alice", marks: 40 },
  { name: "Bob", marks: 65 },
  { name: "Charlie", marks: 80 }
];

// 1. Print names of students who scored more than 50
// 2. Use a do...while loop to keep adding 5 to a score until it reaches 100
```*/

const students = [
  { name: "Alice", marks: 40 },
  { name: "Bob", marks: 65 },
  { name: "Charlie", marks: 80 },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 50) console.log(students[i].name);
}

/*## 2. Variables (var, let, const)
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
*/
{
  var a = 10;
}
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

/*

**Questions:**
- What will each line output?
- Explain the difference between `&&` and `||`.
- Why does `!(x === y)` return true here?
*/

let x = 7;
let y = 3;
console.log(x % y); // 1
console.log(x > y && y > 0); //  true
console.log(x < y || y > 0); //true
console.log(!(x === y)); //true

/*## 4. Loops – For Loop
```js


**Questions:**
- What numbers will be printed?
- Rewrite the loop so it prints only odd numbers from 1 to 10.

---*/
const nums = [2, 4, 6, 8, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
}
// 4,8,12,16,20

console.log("for odd no");

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/*
## 5. Loops – do...while Loop
```js

```

**Questions:**
- How many times will "Number:" be printed?
- Change the condition so that the loop always runs at least once, even if `n` starts from 10.
*/

let n = 1;
do {
  console.log("Number:", n);
  n++;
} while (n <= 5);
console.log("five times");

console.log("running atleast once");
n=10;
do{
    console.log("Number:",n);
    n++
}while(n<=5)

    /*## 6. String Practice
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

---*/

const text = "Hello World";
console.log(text.charAt(0));//'H'     
console.log(text[6]);    //'W'       
console.log(text.substring(0, 5)); //'Hello'
console.log(text.split(" "));  // Hello World  
console.log(`Message: ${text}`); 


/*
## 7. FizzBuzz Lite
- Loop numbers 1 to 20.  
- Print `"Fizz"` for multiples of 3, `"Buzz"` for multiples of 5, `"FizzBuzz"` for multiples of both, else the number.
*/
console.log("fizz buzz game");
for (let i=1;i<=20;i++){
    if(i%3==0&& i%5==0){
        console.log("FizzBuzz");
    }
     
    else if(i%3==0){
        console.log("Fizz");
    }
    

    else if(i%5==0){
        console.log("Buzzz");
    }
    else{
        console.log(i);
    }
    

}

/*
## 8. Type Coercion (String Interpolation & Comparisons)
```js

```

**Questions:**
- What will each line output?
- Which comparisons use type coercion and which don’t?
- Why does `==` behave differently from `===`?
- In the last line, how does string interpolation handle numbers inside `${}`?

--- */

console.log("type coercian problems");
console.log(1 + "2"); //12  
console.log("2" * 3); //6   
console.log(0 == false); //true
console.log(0 === false); //false
console.log([] == false); //true
// console.log([] === false);//false

const num = 5;
const str = "5";
console.log(num == str); //true
console.log(num === str); //false
console.log(`${num + 5} is greater than ${str}`);  


/*## 9. Compare Numbers*/
console.log("Comparisons problems");

let x1 = 5;
let y1 = "5";

console.log(x1 == y1);  //true
console.log(x1 === y1); //false
console.log(x1 != y1);  //false
console.log(x1 !== y1); //true
console.log(x1 > 3);    //true
console.log(x1 < 10);   //true
console.log(x1 >= 5);   //true
console.log(x1 <= 4);   //false

/*## 10. Hoisting
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
- What if you also add `console.log(y)` before declaration?*/

sayHello();
console.log(a1);
function sayHello() {
  console.log("Hello!");
}
var a1 = 5;
let d= 10;
console.log(a1);
