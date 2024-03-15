/*Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.
Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.
Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string.
Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.
To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.
Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.
Now instead of just logging the letters, add them to the results array.
Whales double their e‘s and the u‘s in their language.
Write an if statement that checks if each letter in the input string is equal to 'e'. If so, use the .push() method to add input[i] to the resultArray.
Next, you want to double the letter u.
At the bottom of the program, log the resultArray to the console.
Currently, resultArray outputs an array of characters. To produce proper whale language, we want to capitalize the array elements and put them together as one string.
Run the program and sing the output out loud — you officially speak whale!
Note: To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.
*/

let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for(let i = 0; i < input.length; i++){
  if(input[i] === 'e'){
    resultArray.push(input[i])
  }
  if(input[i] === 'u'){
    resultArray.push(input[i])
  }
  //console.log(i)
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i])
    }
  }
}
let resultString = resultArray.join('').toUpperCase();
console.log(resultString)
