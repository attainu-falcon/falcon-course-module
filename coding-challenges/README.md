# Challenge 1 - Looping through an array
Consider the following array: 
```js
var players = [
{ name: "Roger Federer", rank: 1 },
{ name: "Rafel Nadal", rank: 2 },
{ name: "Nalbandian", rank: 12 },
{ name: "Andy Murray", rank: 14 },
{ name: "Andy Roddick", rank: 4 },
{ name: "Pete Sampras", rank: 3 },
{ name: "Rod Laver", rank: 190 },
{ name: "Andre Agassi", rank: 11 },
{ name: "Novak Djokovic", rank: 5 },
{ name: "Arthur Ashe", rank: 8 },
];
```

Write a `for` loop that only prints players with rank less than or equal to 10.

# Challenge 2 - Find initials of a name
Write a JavaScript function which accepts a name and prints the initials.

Input: `Mahendra Singh Dhoni`
Output: `MSD`

Input: `Shah Rukh Khan`
Output: `SRK`

# Challenge 3 - Compare two arrays
Write a JavaScript function that compares two arrays and prints whether they are equal or not.

> **Note:** Two arrays are considered equal if both arrays contain the same number of elements, and all corresponding pairs of elements in the two arrays are equal. In other words, two arrays are equal if they contain the same elements in the same order.

# Challenge 4 - Looping and searching
Create a function which takes a state as input and loops through the data to output the cities that belong to that state. The data can be found in the file [cities.json](data/cities.json)


# Challenge 5 - Star pattern
Write a JavaScript function that produces a star pattern likes this.

```
*
**
***
****
*****
****
***
**
*
```

# Challenge 6 - String Search
First, load the [cities.json](data/cities.json) using Ajax.

Then write a Javascript function that takes a letter and finds all the cities that starts with that letter.

# Challenge 7 - Login page using Bootstrap
Create a login page using bootstrap which looks like the below screenshot 

![bootstrap login page](images/login-page-bootstrap.png)

# Challenge 8 - Book search app (client side)
Create a Javascript application that lets the user search for books under a particular language 

![book library](images/book-library.png)

Use AJAX to load [books.json](data/books.json)

Use an event handler to get the user input from the form.

Create DOM manipulation methods to show the search result using a table.

# Challenge 9 - Looping with condition
Write a Javascript program that prints even numbers from 1 to 100 in descending order.
The output should show:
```
100
98
96
.
.
.
2
```

# Challenge 10 - Hamming distance
Write a program to find the Hamming distance between two strings.

> **Note:**  Hamming distance between two strings of equal length is the number of positions at which the corresponding characters are different. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.

The Hamming distance between:

1. "karolin" and "kathrin" is 3.
2. "karolin" and "kerstin" is 3.
3. 1011101 and 1001001 is 2.
4. 2173896 and 2233796 is 3.

# Challenge 11 - Github users API
Use AJAX to call the Github users API at https://api.github.com/users. Obtain a list of users from the API and show them in Bootstrap cards.

# Challenge 12 - Anagram
Given 2 strings, find whether one is an anagram of the other.

> **Note:** Two strings are anagrams if they are written using the same exact letters. Each letter should have the same count in both strings. e.g. 'binary' and 'brainy'

# Challenge 13 - Palindrome
Write a function to check whether a given string is a palindrome.

> **Note:** A palindrome is a word that is the same when read backwards. e.g. `kayak`, `madam`, `malayalam`

# Challenge 14 - Formatting time
Write a function that takes a number input in seconds and returns the number of hours, minutes and seconds as output. Separate the number of hours, minutes and seconds with colons `:`.

```
Input: 126
Output: "0:2:6"

Input: 45
Output: "0:0:45"

Input: 3700
Output: "1:1:40"
```
# Challenge 15 - Character increment
Write a function to take a string as input and change each letter to the next letter in the alphabet.

```
Input: "hello"
Output: "ifmmp"

Input: "zeta"
Output: "afub"
```

# Challenge 16 - URL parameter extraction
Write a function to take a url as a string input and extract all url parameters from it. Return an object contaning these key-value pairs.

```
Input: "http://localhost:3000/add?num1=5&num2=3"
Output: { "num1": 5, "num2": 3 }

Input: "http://localhost:3000/search"
Output: "Missing URL parameters!"
```

# Challenge 17 - Factorial
Write  a function to take a number input and output its factorial.

> **Note:** The factorial of any number is the product of all positive integers less than or equal to it. Factorial is mathematically denoted by the symbol `!`.

```
4! = 4 * 3 * 2 * 1 = 24

6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
```

# Challenge 18 - Decimal to binary
Write a function to input a decimal (base-10) number and return its binary equivalent (base-2). The image below illustrates the method to get a binary equivalent `10001` of a decimal number `17`.

![conversion](images/decimal-binary.png)

# Challenge 19 - Fibonacci
Write a function to take an input n and print first n terms of the Fibonacci series.

> **Note:** The Fibonacci Sequence is the series of numbers - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
> Any term of the Fibonacci series is found by adding up the two numbers before it.

# Challenge 20 - Pangram
Given a string, find all characters that are missing from the string, i.e., the characters that can make the string a pangram. Print the output in alphabetic order, case-insensitive.

> **Note:** A pangram is a sentence containing every letter in the English alphabet.

```
Input : The quick brown fox jumps
Output : adglvyz
```

## Week 12

### Day 3: Numbers to words

Create a Javascript function that takes a number and convert it into words.

For example, if your function is `convert`, the following are some sample call results -`convert(1234)` => `One Two Three Four`
`convert(90)` => `Nine Zero`
`convert(117)` => `One One Seven`

Hints:

Breaking down the problem into smaller pieces, the hardest part is to get individual digits from the number.

That is you need to get 1, 2, 3, and 4 individually from the number `1234`.

Now to do that, you can divide the number by 10 and get the reminder repeatedly till the number is zero. And the reminder in each step will be your individual digit.

When you get the digit, finding the corresponding word is easy. You can simply create an array like `words = ["Zero", "One", "Two" ...]` and map each digit as the index to get the word for it.

## Week 13

### Day 2: Check for power of 2

Create a Javascript function that checks if a number is power of two.

For a number that is power of two, you should return `true`. For others, you should return `false`. Examples: `isPowerOfTwo(16)` => `true`
`isPowerOfTwo(9)` => `false`

**Hint:** You can easily check if a number is power of two by repeatedly dividing it by two and check for any reminders until the number becomes 1 or less.

If there is a remainder, the number is not a  power of two. If we can divide until one without any remainders, the number is a power of two.