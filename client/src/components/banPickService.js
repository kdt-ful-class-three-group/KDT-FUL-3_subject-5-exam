console.log("연결")
// import { CHAMPOBJ } from "./obj/CHAMPOBJ_hyunjoon.js";


//[ ] section#list > div 선택하면 id,name 가져와서 배열에 담기
//[ ] 일단) 무조건 번갈아가면서 담기 blue -> red -> blue -> red

//[ ] ban[] 에 담은 데이터 div#color > div에 넣기

//[ ] 중복 안됨

//[ ] 클릭하면 담기, 선택안하면 걍 안한 거 : null, "noBan"

//[ ] 최대 10번
 const CHAMPOBJ = {
      banPickData: {
        blue: { ban: [], pick: [] },
        red: { ban: [], pick: [] }
      }
    }



//     const blueBtn = document.querySelector('#blueBtn');
//     const redBtn = document.querySelector('#redBtn');

//     blueBtn.addEventListener('click', () => {
//       CHAMPOBJ.banPickData.blue.ban.push();
//       console.log(CHAMPOBJ.banPickData.blue.ban);
//     });
//     redBtn.addEventListener('click', () => {
//       CHAMPOBJ.banPickData.blue.ban.push();
//       console.log(CHAMPOBJ.banPickData.blue.ban);
//     });