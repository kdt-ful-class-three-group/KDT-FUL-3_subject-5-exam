console.log("연결")
import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js"
console.log('obj확인',CHAMPOBJ.banPickData)


//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = {
    blue:0,
    red:0
};

// let finallCount = 10;
let clickData=[];
let finalClick = [];

//id, name을 객체로 담기

//[ ] section#list > div 선택하면 div#color > div에 담기
//10개 값이 다 확정되면 > 배열에 넣기
//배열 length

const blueDiv = document.querySelectorAll('div#blue > div')
const redDiv = document.querySelectorAll('div#red > div')

const list = document.getElementById('list').children
console.log(list)
//section#list
//짝수일 때는 blueDiv에
//홀수 일 때는 redDiv에
//숫자 사용을 위해 for문 사용

Array.from(list).forEach(div=>{
  //div 클릭 이벤트
  div.addEventListener('click',()=>{
    //click한 div의 속성값 배열에 넣기
    clickData.push({id : div.getAttribute('id'), name : div.getAttribute('name')})
    //마지막 요소만 남기기
    if(clickData.length>1){
      clickData.shift()
      console.log('click',clickData)
    }
  })
})
//버튼
const choiceBtn = document.getElementById('choice')
//버튼 클릭 이벤트
choiceBtn.addEventListener('click',()=>{
  //div를 클릭했을 때 선택버튼 누르면 최종 배열에 추가 + 클릭데이터 비우기
  if(clickData[0]){
    finalClick.push(clickData[0])
    clickData = []
  }else {
    //div를 클릭하지 않고 그냥 넘어갔을 경우
    finalClick.push({id:'ban',name:'ban'})
  }
  //console로 확인
  console.log('last',finalClick)

})




//[ ] 일단) 무조건 번갈아가면서 담기 blue -> red -> blue -> red

//[ ] 중복 안됨

//[ ] 클릭하면 담기, 선택안하면 걍 안한 거 : null, "noBan"

//[ ] 최대 10번