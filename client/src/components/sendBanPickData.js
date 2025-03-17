// import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js";


// data가 들어오는지 확인
function sendBanPickData(list){
  
  console.log(list);
  
}

// function sendBanPickData() {
//   fetch("/save", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/javascript",
//     },
//     body: CHAMPOBJ.banPickData,
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(`${err} 에러발생`));
// }

export {sendBanPickData}