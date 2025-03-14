import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js";

let data = CHAMPOBJ.banPickData;


console.log(data.blue.ban); // []
console.log(data.blue.pick); // []
console.log(data.red.ban); // []
console.log(data.red.pick); // []

const blueBtn = document.querySelector('#blueBtn');
const redBtn = document.querySelector('#redBtn');

blueBtn.addEventListener('click', () => {
  CHAMPOBJ.banPickData.blue.ban.push();
  console.log(CHAMPOBJ.banPickData.blue.ban);
});
redBtn.addEventListener('click', () => {
  CHAMPOBJ.banPickData.blue.ban.push();
  console.log(CHAMPOBJ.banPickData.blue.ban);
});
