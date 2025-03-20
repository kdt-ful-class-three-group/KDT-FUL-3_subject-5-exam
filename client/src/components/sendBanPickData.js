// * data가 들어오는지 확인
// function sendBanPickData(list){
  
//   console.log(list);
  
// }
/**
 * 
 * @param {*} list saveFinalBanData.js에서 CHAMPOBJ.banPickData를 가져옴
 * @description POST로 /save 경로로 app.js에 banPickData를 보내기 위해서 만든 모듈
 */
function sendBanPickData(banPickData) {
  fetch("http://localhost:8001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(banPickData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(`${err} 에러발생`));
}

export { sendBanPickData }
