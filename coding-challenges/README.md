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

> Two arrays are considered equal if both arrays contain the same number of elements, and all corresponding pairs of elements in the two arrays are equal. In other words, two arrays are equal if they contain the same elements in the same order.

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
