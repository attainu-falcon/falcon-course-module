# Introduction

This test contains three items
    - An MCQ 
    - A coding challenge
    - An assignment.

You have about 6 hours to submit everything - from 8am to 4pm.

## MCQ

MCQ will be shared in the afternoon.

## Coding Challenge

Please create a Javascript function that takes in a string and returns an integer version of it. (No `parseInt` please. Please construct an algorithm for the same).

Some example calls:

```
strToInt("10");     // Returns 10
strToInt("-21");     // Returns -21
strToInt("             11");     // Returns 11. Notice the space in input.
strToInt("18            ");     // Returns 18. Notice the space at the end of the input.
strToInt("attainu10");     // Returns 0 as a character other than space is in the string.
```

Here are the rules:

1. Only space is considered as a non-numeric character.
2. If the input contains any character other than space, negative sign or numbers, please return 0.
3. Do not forget the negative sign, if it exists in the front of the string.


## Assignment

### Backend

The backend part consisting of writing a Node script to read a JSON file and populate the database. Then you have to create two Express routes as mentioned below.

Please find `airports.json` ![here](airports.json). You should create a simple NodeJS script that reads this file and populate two collections in MongoDB - `cities` and `airports`.

Then create two endpoints in Express - 

1. `cities` should return all the cities stored in the database.
2. `airports` should take a query parameter called `city` and return all the airport under that city.

### Frontend

The frontend should contain a React app that fetches its data from the two endpoints we have created earlier.

The frontend should show a `City` select box populated from the `cities` endpoint. Upon selecting a City, the app should show all the airports and their IATA code belonging to that city. The app should make use of `airports` endpoint we have created above for this.

### Design

You can use simple Bootstrap classes to style your app.


## Submitting the Solution

Please created a repo named `attainu-test` and put the coding challenge solution as `strtoint.js` and the Express + React project inside `app` folder.

Please include `package.json` in with all the packages you are using inside the `app` folder as well.