'use script';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
/**
 * Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
 */
console.log('Coding Challenge 4 ');
document.querySelector('button').addEventListener('click', function () {
  const inputString = String(document.querySelector('textarea').value);
  const inputArray = inputString.split('\n');
  let symbol = '✅';
  let c = 0;
  for (let inputs of inputArray.values()) {
    let tempArr = inputs.split('_');
    let finalWord = '';
    let count = 0;
    for (let a of tempArr) {
      let firstWord = '',
        otherword = '';
      if (count == 0) {
        firstWord = a.slice(0, 1).toLowerCase() + a.slice(1);
        finalWord += firstWord;
      } else {
        otherword = a.slice(0, 1).toUpperCase() + a.slice(1);
        finalWord += otherword;
      }
      count++;
    }
    console.log(finalWord.padEnd(20) + symbol.repeat(++c));
  }
});
