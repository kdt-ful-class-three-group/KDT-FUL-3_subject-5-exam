console.log("연결")
import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js"
console.log('obj확인',CHAMPOBJ.banPickData)

//클릭 횟수, 배열에 담길 순서를 결정할 변수
let clickCount = 0;

//id, name을 객체로 담기

//[ ] section#list > div 선택하면 div#color > div에 담기
//10개 값이 다 확정되면 > 배열에 넣기
//배열 length

const blueDiv = document.querySelectorAll('div#blue > div')
const redDiv = document.querySelectorAll('div#red > div')

const list = document.getElementById('list').children
console.log(list)
//section#list
Array.from(list).forEach((div,index)=>{
  div.addEventListener('click',()=>{
    if(index%2===0){
      //짝수일 때는 blueDiv에

      //홀수 일 때는 redDiv에
    }
  })
})


//[ ] 일단) 무조건 번갈아가면서 담기 blue -> red -> blue -> red

//[ ] ban[] 에 담은 데이터 div#color > div에 넣기

//[ ] 중복 안됨

//[ ] 클릭하면 담기, 선택안하면 걍 안한 거 : null, "noBan"

//[ ] 최대 10번