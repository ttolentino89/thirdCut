# :three:rd:scissors:

"thirdCut" is a simple Node.js server-side JavaScript application that accepts user input in the form of a string sent to "/test", then returns a new string created from every third letter of the original input. Here it is in action below:

![thirdcut](https://user-images.githubusercontent.com/27389714/89055547-8e6ecc80-d328-11ea-8667-174522d75041.gif)

## Implementation + Testing :computer:

To run thirdCut on your machine, please enter the following commands in your terminal:

1.  ```git clone https://github.com/ttolentino89/thirdCut.git```
2.  ```cd thirdCut```
3.  ```npm i```
4.  ```npm start```

If you're not familiar with using the terminal or command line interface (CLI) on your computer, that's totally okay! There's a great tutorial on common CLI commands [here](https://blog.galvanize.com/how-to-use-the-terminal-command-line/) that I highly recommend for first-timers.

Because thirdCut is hosted and run locally, you will need a web API client and development environment such as [Postman](https://www.postman.com/) which you can download for free [here](https://www.postman.com/). In fact, the example demo above shows this program being tested out in Postman, so you should have a good idea how it should look if all goes well  :+1:

## Project Prompt :memo:

This program follows the original project prompt which called for the following:

- Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
- Return a JSON object with the key “return_string” and a string containing every third letter from the original string (e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.

Note: To see expected behavior you can test against a current working example with the command: curl -X POST https://lyft-interview-test.glitch.me/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'


## How It Works: :factory:

## Process + Observations 

## References 

