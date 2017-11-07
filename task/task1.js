'use strict';

/**
 * Числа Фиббоначи
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
 * https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * Знайти суму перших n чисел фібоначі.
 */

var fibonacciTests = [
    {
        parameters: [1],
        expectedResult: 1
    },
    {
        parameters: [3],
        expectedResult: 4
    },
    {
        parameters: [5],
        expectedResult: 12
    },
    {
        parameters: [20],
        expectedResult: 17710
    },
    {
        parameters: [0],
        expectedResult: 0
    }
];


function fibonacci(n) {
    if (!isNaN(n)) {
        if (n > 2) {
            let x = 1,
                y = 1,
                f = 0,
                sum = 2;

            for (let i = 2; i < n; i++)
            {
                f = x + y;
                x = y;
                y = f;
                sum += f;
            }
            return sum;
        } else if (n <= 2 && n > 0) {
            return n;
        } else if (n === 0) {
            return 0;
        }
    } else return NaN;
}


tasks.push({
    title: "Числа Фиббоначи",
    solution: fibonacci,
    tests: fibonacciTests
});