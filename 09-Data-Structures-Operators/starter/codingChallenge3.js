// TASK 3
// console.log(
//   add([
//     4842, 193, 60, 840, 1105, 4000, 190, 2700, 358, 280, 110, 500, 500, 3500,
//     1680, 2000, 13500, 3700, 3700, 4000, 360, 7500,
//   ])
// );

'use strict';
/**
 * Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL
GOOD LUCK 😀
 */
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// TASK 1
const eventArray = new Set();
for (let [, e] of gameEvents) eventArray.add(e);
console.log(eventArray);

// TASK 2
gameEvents.get(64) == '🔶 Yellow card' &&
  gameEvents.delete(64) &&
  console.log('Yellow card removed from 64th min');
let add1 = 0;
function add(param) {
  for (let a of param) {
    console.log((add1 += a));
  }
}
// TASK 3
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

// TASK 4
for (let [min, action] of gameEvents) {
  min <= 45 && console.log(`[FIRST HALF] ${min} : ${action}`);
  min > 45 && console.log(`[SECOND HALF] ${min} : ${action}`);
}
