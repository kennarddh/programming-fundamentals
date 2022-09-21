# Algorithms

Algorithms is a sequence of process that we can apply to solve a certain problem. To solve a same problem, there could be many possible ways to solve it. But every algorithms that can solve the same problem have their own uniqueness, time, and the amount of memory they use to solve a problem. There is a mathematical model that we can use to quantify the amount of time and memory used in solving a problem. It's call Asymtotic Notation.

Why we quantify the process?
- We can understand the amount of time needed to solve a certain problem in a bigger scale.
- We can compute the amount of memory and resources that are needed to execute the algorithm.

There are three notation used to help us quantify this:
1. Big O Notation
   Represents the worst case complexity of the algorithm.
2. Omega Notation
   Represents the best case complexity of the algorithm.
3. Theta Notation
   Represents the average case complexity of the algorithm.


## Recursion

Recursion means 'defining a problem in terms of itself'. In the implementation, recursion can be applied by calling out the function inside it's own function body.

Parts of a Recursive Algorithm

1. Base Case (to make the algorithms stop)
2. Work toward Base Case
3. Recursive Call (call the function itself)

How recursion algorithms work:

In recursion algorihtms, the computer "remember" every previous state of the problem. The state information is "stored" by the computer on the "activation stack" (inside each functions).

```js

function me() {
   if (baseCondition) {
      return value;
   }
   return me();
}

```

### Recursion from Math Perspective

Recursion in math is represent by using a function.

The basic idea of function is inspired from the function that we learn in math. In math, there is a lesson that we will learn. It's call algebra representation.

For example, given two parameter, let's say a and b. Create a function that return the result of multiplication between a and b.

```js
function multiple(a, b) {
   return a * b;
}


console.log(multiple(2, 4)) // 8


/*
Relation between parameter and the result

(1, 10) -> 10
(2, 6) -> 12

*/

```

```

f(x) = x^2 + 6x + 10
g(x) = x + 10

h(x) = 2 * g(x) + f(x)

Nilai h(x) dimana x = 2

h(2) = 2 * g(2) + f(2)
     = 2 * 12 + 26
     = 2 * 12 + 26
     = 50

```

```js

const f = (x) => x * x + 6 * x + 10
const g = (x) => x + 10

const h = (x) => 2 * g(x) + f(x)

console.log(h(2))
```


So how about recursion? How does it work?

Let's take an example factorial.
```

factorial(0) = 1 // Base Case
factorial(n) = n * factorial(n - 1)

```

Here is the implementation in JS:
```js
const factorial = (n) => {
   if (n <= 0) return 1

   return n * factorial(n - 1)
}
```

