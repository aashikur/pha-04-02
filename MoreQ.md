/*  
    Assignment: JavaScript Practice  
    Instructions:  
    - All variables and logic must be inside the function.  
    - Do not declare global variables.  
    - Do not use console.log() inside functions; instead, return the value.  
    - Read the problem carefully before coding.  
*/

/*  
    Problem-01: Convert Celsius to Fahrenheit  
    ⚠ Function Name Must be: convertToFahrenheit()  

    Description:  
    Write a function that converts a given temperature from Celsius to Fahrenheit.  

    📥 Input:  
    - A number representing the temperature in Celsius.  

    🚀 Output:  
    - A number representing the temperature in Fahrenheit.  

    🚩Challenge:  
    - If the input is not a number, return "Invalid".  

    Sample Input | Sample Output  
    0           | 32  
    100         | 212  
    "abc"       | "Invalid"  
*/

function convertToFahrenheit(celsius) {
    if (typeof celsius !== "number") return "Invalid";
    return (celsius * 9/5) + 32;
}


/*  
    Problem-02: Check Even or Odd  
    ⚠ Function Name Must be: isEven()  

    Description:  
    Write a function that checks if a given number is even or odd.  

    📥 Input:  
    - A number.  

    🚀 Output:  
    - Return true if even, otherwise false.  

    🚩Challenge:  
    - If the input is not a number, return "Invalid".  

    Sample Input | Sample Output  
    10          | true  
    7           | false  
    "12"        | "Invalid"  
*/

function isEven(number) {
    if (typeof number !== "number") return "Invalid";
    return number % 2 === 0;
}


/*  
    Problem-03: Reverse a String  
    ⚠ Function Name Must be: reverseString()  

    Description:  
    Write a function that reverses a given string.  

    📥 Input:  
    - A string.  

    🚀 Output:  
    - Return the reversed string.  

    🚩Challenge:  
    - If the input is not a string, return "Invalid".  

    Sample Input  | Sample Output  
    "hello"      | "olleh"  
    "world"      | "dlrow"  
    12345        | "Invalid"  
*/

function reverseString(text) {
    if (typeof text !== "string") return "Invalid";
    return text.split("").reverse().join("");
}


/*  
    Problem-04: Calculate Factorial  
    ⚠ Function Name Must be: calculateFactorial()  

    Description:  
    Write a function that calculates the factorial of a given number.  

    📥 Input:  
    - A non-negative integer.  

    🚀 Output:  
    - Return the factorial value.  

    🚩Challenge:  
    - If the input is not a non-negative integer, return "Invalid".  

    Sample Input | Sample Output  
    5           | 120  
    0           | 1  
    -3          | "Invalid"  
*/

function calculateFactorial(num) {
    if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) return "Invalid";
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}


/*  
    Problem-05: Find the Largest Number in an Array  
    ⚠ Function Name Must be: findLargest()  

    Description:  
    Write a function that finds the largest number in an array.  

    📥 Input:  
    - An array of numbers.  

    🚀 Output:  
    - Return the largest number.  

    🚩Challenge:  
    - If the input is not an array or contains non-numeric values, return "Invalid".  

    Sample Input      | Sample Output  
    [3, 5, 9, 2, 10]  | 10  
    [0, -5, -10, 7]   | 7  
    ["a", 1, 2]       | "Invalid"  
*/

function findLargest(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) return "Invalid";
    return Math.max(...arr);
}


/*  
    Problem-06: Count Vowels in a String  
    ⚠ Function Name Must be: countVowels()  

    Description:  
    Write a function that counts the number of vowels in a given string.  

    📥 Input:  
    - A string.  

    🚀 Output:  
    - Return the count of vowels.  

    🚩Challenge:  
    - If the input is not a string, return "Invalid".  

    Sample Input  | Sample Output  
    "hello"      | 2  
    "world"      | 1  
    12345        | "Invalid"  
*/

function countVowels(text) {
    if (typeof text !== "string") return "Invalid";
    return (text.match(/[aeiou]/gi) || []).length;
}


/*  
    Problem-07: Sum of All Elements in an Array  
    ⚠ Function Name Must be: sumArray()  

    Description:  
    Write a function that calculates the sum of all numbers in an array.  

    📥 Input:  
    - An array of numbers.  

    🚀 Output:  
    - Return the sum.  

    🚩Challenge:  
    - If the input is not an array or contains non-numeric values, return "Invalid".  

    Sample Input  | Sample Output  
    [1, 2, 3, 4]  | 10  
    [10, 20, 30]  | 60  
    ["5", 5, 10]  | "Invalid"  
*/

function sumArray(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) return "Invalid";
    return arr.reduce((sum, num) => sum + num, 0);
}


/*  
    Problem-08: Check for Prime Number  
    ⚠ Function Name Must be: isPrime()  

    Description:  
    Write a function that checks whether a number is prime.  

    📥 Input:  
    - A positive integer.  

    🚀 Output:  
    - Return true if the number is prime, otherwise false.  

    🚩Challenge:  
    - If the input is not a positive integer, return "Invalid".  

    Sample Input | Sample Output  
    7           | true  
    10          | false  
    "15"        | "Invalid"  
*/

function isPrime(num) {
    if (typeof num !== "number" || num < 2 || !Number.isInteger(num)) return "Invalid";
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


/*  
    Problem-09: Find the Longest Word in a Sentence  
    ⚠ Function Name Must be: findLongestWord()  

    Description:  
    Write a function that returns the longest word in a given sentence.  

    📥 Input:  
    - A string.  

    🚀 Output:  
    - Return the longest word.  

    🚩Challenge:  
    - If the input is not a string, return "Invalid".  

    Sample Input      | Sample Output  
    "I love coding"   | "coding"  
    "JavaScript is fun" | "JavaScript"  
*/

function findLongestWord(sentence) {
    if (typeof sentence !== "string") return "Invalid";
    return sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

/*  
    Assignment: JavaScript Advanced Practice  
    Instructions:  
    - All variables and logic must be inside the function.  
    - Do not declare global variables.  
    - Do not use console.log() inside functions; instead, return the value.  
    - Read the problem carefully before coding.  
*/

/*  
    Problem-01: Count Words in a Sentence  
    ⚠ Function Name Must be: countWords()  

    Description:  
    Write a function that counts the number of words in a given sentence.  

    📥 Input:  
    - A string containing words separated by spaces.  

    🚀 Output:  
    - Return the number of words.  

    🚩Challenge:  
    - If the input is not a string, return "Invalid".  
    - Ignore multiple spaces between words.  

    Sample Input          | Sample Output  
    "Hello world"        | 2  
    "JavaScript is fun"  | 3  
    "   Too    many spaces " | 3  
    12345                | "Invalid"  
*/

function countWords(sentence) {
    if (typeof sentence !== "string") return "Invalid";
    return sentence.trim().split(/\s+/).length;
}


/*  
    Problem-02: Find the Second Largest Number in an Array  
    ⚠ Function Name Must be: secondLargest()  

    Description:  
    Write a function that finds the second largest number in an array.  

    📥 Input:  
    - An array of numbers.  

    🚀 Output:  
    - Return the second largest number.  

    🚩Challenge:  
    - If the input is not a valid array, return "Invalid".  
    - If there is no second largest number, return "Not Available".  

    Sample Input      | Sample Output  
    [10, 20, 30, 40] | 30  
    [5, 5, 5, 5]     | "Not Available"  
    [100]            | "Not Available"  
    "not an array"   | "Invalid"  
*/

function secondLargest(arr) {
    if (!Array.isArray(arr) || arr.some(n => typeof n !== "number")) return "Invalid";
    let unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique.length > 1 ? unique[1] : "Not Available";
}


/*  
    Problem-03: Find the First Repeated Character  
    ⚠ Function Name Must be: firstRepeatedChar()  

    Description:  
    Write a function that finds the first repeated character in a string.  

    📥 Input:  
    - A string.  

    🚀 Output:  
    - Return the first repeated character.  

    🚩Challenge:  
    - If the input is not a string, return "Invalid".  
    - If no character repeats, return "No Repeated Character".  

    Sample Input   | Sample Output  
    "hello"       | "l"  
    "world"       | "No Repeated Character"  
    12345         | "Invalid"  
*/

function firstRepeatedChar(text) {
    if (typeof text !== "string") return "Invalid";
    let seen = new Set();
    for (let char of text) {
        if (seen.has(char)) return char;
        seen.add(char);
    }
    return "No Repeated Character";
}


/*  
    Problem-04: Check if a Year is a Leap Year  
    ⚠ Function Name Must be: isLeapYear()  

    Description:  
    Write a function that checks if a given year is a leap year.  

    📥 Input:  
    - A number representing a year.  

    🚀 Output:  
    - Return true if the year is a leap year, otherwise false.  

    🚩Challenge:  
    - If the input is not a number, return "Invalid".  

    Sample Input | Sample Output  
    2000        | true  
    1900        | false  
    2024        | true  
    "year"      | "Invalid"  
*/

function isLeapYear(year) {
    if (typeof year !== "number") return "Invalid";
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


/*  
    Problem-05: Remove Duplicates from an Array  
    ⚠ Function Name Must be: removeDuplicates()  

    Description:  
    Write a function that removes duplicate values from an array.  

    📥 Input:  
    - An array of numbers or strings.  

    🚀 Output:  
    - Return a new array with duplicates removed.  

    🚩Challenge:  
    - If the input is not an array, return "Invalid".  

    Sample Input          | Sample Output  
    [1, 2, 2, 3, 3, 3]   | [1, 2, 3]  
    ["a", "b", "b", "c"] | ["a", "b", "c"]  
    "not an array"       | "Invalid"  
*/

function removeDuplicates(arr) {
    if (!Array.isArray(arr)) return "Invalid";
    return [...new Set(arr)];
}


/*  
    Problem-06: Check if a String is a Palindrome  
    ⚠ Function Name Must be: isPalindrome()  

    Description:  
    Write a function that checks if a given string is a palindrome.  

    📥 Input:  
    - A string.  

    🚀 Output:  
    - Return true if the string is a palindrome, otherwise false.  

    🚩Challenge:  
    - If the input is not a string, return "Invalid".  

    Sample Input  | Sample Output  
    "madam"      | true  
    "hello"      | false  
    12345        | "Invalid"  
*/

function isPalindrome(text) {
    if (typeof text !== "string") return "Invalid";
    let reversed = text.split("").reverse().join("");
    return text === reversed;
}


/*  
    Problem-07: Find the Missing Number in an Array  
    ⚠ Function Name Must be: findMissingNumber()  

    Description:  
    Write a function that finds the missing number in a sequence from 1 to n.  

    📥 Input:  
    - An array containing numbers from 1 to n with one number missing.  

    🚀 Output:  
    - Return the missing number.  

    🚩Challenge:  
    - If the input is not a valid array, return "Invalid".  

    Sample Input      | Sample Output  
    [1, 2, 3, 5]     | 4  
    [6, 3, 1, 2, 5]  | 4  
    [1, 2, 3, 4, 5]  | "No Missing Number"  
*/

function findMissingNumber(arr) {
    if (!Array.isArray(arr) || arr.some(n => typeof n !== "number")) return "Invalid";
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    let missing = expectedSum - actualSum;
    return missing === 0 ? "No Missing Number" : missing;
}


/*  
    Problem-08: Count Occurrences of a Character  
    ⚠ Function Name Must be: countOccurrences()  

    Description:  
    Write a function that counts how many times a specific character appears in a string.  

    📥 Input:  
    - A string and a character.  

    🚀 Output:  
    - Return the count of occurrences.  

    🚩Challenge:  
    - If the input is not valid, return "Invalid".  

    Sample Input     | Sample Output  
    "hello", "l"    | 2  
    "banana", "a"   | 3  
    12345, "3"      | "Invalid"  
*/

function countOccurrences(text, char) {
    if (typeof text !== "string" || typeof char !== "string" || char.length !== 1) return "Invalid";
    return text.split(char).length - 1;
}
