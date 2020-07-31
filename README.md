# :three:rd:scissors:

"thirdCut" is a simple Node.js server-side JavaScript application that accepts user input in the form of a request sent to "/test", then returns a new string created from every third letter of the original input. Here it is in action below:

![thirdcut](https://user-images.githubusercontent.com/27389714/89055547-8e6ecc80-d328-11ea-8667-174522d75041.gif)

## Implementation + Testing :computer:

To run thirdCut on your machine, please enter the following commands in your terminal:

1.  ```git clone https://github.com/ttolentino89/thirdCut.git```
2.  ```cd thirdCut```
3.  ```npm i```
4.  ```npm start```

If you're not familiar with using the terminal or command line interface (CLI) on your computer, that's totally okay! There's a great tutorial on common CLI commands [here](https://blog.galvanize.com/how-to-use-the-terminal-command-line/) that I highly recommend for first-timers. You'll know that your server is running if you see something similar in your terminal as the example below:

<img width="544" alt="Screen Shot 2020-07-31 at 3 23 08 PM" src="https://user-images.githubusercontent.com/27389714/89069763-c9c9c500-d341-11ea-8292-01569bb91567.png">

Because thirdCut is hosted and run locally, you will need a web API client and development environment such as [Postman](https://www.postman.com/) which you can download for free [here](https://www.postman.com/). In fact, the example demo above shows this program being tested out in Postman, so you should have a good idea how it should look if all goes well  :+1:

## Project Prompt :memo:

This program follows the original project prompt which called for the following:

```
- Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
- Return a JSON object with the key “return_string” and a string containing every third letter from the original string (e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.

Note: To see expected behavior you can test against a current working example with the command: curl -X POST https://lyft-interview-test.glitch.me/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
```

Three main parts of this program needed to be implemented in order to satisfy requirements:

1. Get user input as "string_to_cut"
2. Post user input to /test route, which will then
3. Return "string_to_cut" as a new "return_string" which is composed of every third letter of the original user input

## How It Works: :factory:

To keep interests separate, I created two separate files. "test.js" contains all the backend Express server logic + routes, and "third.js" contains the function that actually "splits" the string into third letters and returns a new string created from those "split" characters. In fact, third.js only contains one function which is exported as a module into test.js, and that function is below:

```
const everyThird = (input) => {
  let string = input.toString();
  if (string.length <= 3) {
    return "Error! Input must be longer than 3 characters."
  }
  let result = '';
  let i = 0;
  string.replace(/\s/g, "").split('').forEach(charAt3 => {
    i++;
    if (i % 3 === 0) {
      result += charAt3
    }
  })
  return result
}
```

## Process & Observations :mag:

While pseudo-coding out intial ideas, I came up with a lot of ideas which either didn't work or were never implemented, such as

- using a for-loop to iterate over every third character (this was later abandoned for .forEach() instead, which was much cleaner and efficient
- parsing the input by letter using split(), instantiating an empty array, pushing each letter into the array and then using .slice() at any indices divisible by 3 (i % 3) to get every third letter, and THEN converting this back to a string by using .toString() ....yeah.....
- other variations of the above two ideas which you can probably still see in my practice repl [here.](https://repl.it/repls/PrestigiousImmaculateAccess#index.js)

Eventually, I came up with a final working solution which turned into everyThird in third.js, and while there's probably room for improvement (there's *always* room for refactoring), I'm pretty happy with how everything worked out in the end.

I also struggled a bit with my app.post in test.js, as I originally had my user input request set to the following:

```
let string_to_cut = req.body
```

This would literally return the whole request, which was an issue since this would affect the function I call on the next line. I struggled looking for ways to parse the input until I realized that this was just an object, and all I had to do was access that key's value. Changing that line to the following literally solved all my problems with this

```
let string_to_cut = req.body.string_to_cut;
```

And like magic, it worked flawlessly. :tophat::sparkles:
Shoutout to the original poster on Stack Overflow who first asked [this question.](https://stackoverflow.com/questions/14008346/express-js-req-body)

## References :books:

References consulted for this project include (but are not limited to) the following links below:

- https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript#5963202
- https://codekila.com/remove-duplicates-from-javascript-array/
- https://www.codespeedy.com/remove-duplicate-values-from-a-javascript-array/
- https://www.w3schools.com/Js/js_json_parse.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- https://expressjs.com/en/api.html#express.json
- https://stackoverflow.com/questions/14008346/express-js-req-body

Thanks for stopping by, and hope you enjoyed reading this as much I did writing this :grin:

:raised_hands: :three:rd:scissors: :raised_hands:
