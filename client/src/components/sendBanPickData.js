import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js";

function sendBanPickData() {
  fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(CHAMPOBJ.banPickData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(`${err} 에러발생`));
}

export { sendBanPickData };