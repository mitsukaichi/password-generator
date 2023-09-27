# password-generator

## About this project

This project was done as the third assignment of a UC Berkeley Full Stack web developer coding bootcamp to learn about the basics of Javascript.

I was given base HTML / CSS / Javascript files to make a webpage that meets the follwing criteria:

- user is presented with a series of prompts for password criteria by clicking the button to generate a password
- user can select which criteria to include in the password
- user can choose a length of at least 8 characters and no more than 128 characters
- user can choose whether or not to include lowercase, uppercase, numeric, and/or special characters
- user's input is validated and at least one character type should be selected
- once user answer all the prompts, a password is generated that matches the selected criteria
- once the password is generated, the password is either displayed in an alert or written to the page

## Installation

Visit this page: https://mitsukaichi.github.io/password-generator/

[Screenshot](assets/screenshot.png)

## How I addressed this challenge

I addressed this challenge by following these steps.

1. Examine the given HTML and javascript files, how javascripts are linked to the button element on HTML
2. Create and test the first prompt to ask a user to provide the password length to understand how the javascript function works with the button click action
3. Break down process into the following mini steps
    1. Ask users to provide the password length and validate
    2. Ask users if they want to include each character type, validate
    3. Generate a array that contains all the characters in selected type(s)
    4. Generate a new array that contains the randomly selected character from the list created in step 3, to the length selected in step 2
    5. Convert the generated array into string and display to the user 
4. Write functions to perform each step, test and deploy

## Reference documents

- [JavaScript String with Quotes](https://www.geeksforgeeks.org/javascript-string-with-quotes/)
- [JavaScript Random](https://www.w3schools.com/js/js_random.asp)
- [How to Convert Array to String Without Commas in JavaScript?](https://linuxhint.com/convert-array-to-string-without-commas-javascript/)

## License

License is available in [License file on a GitHub repository](https://github.com/mitsukaichi/password-generator/blob/main/LICENSE)