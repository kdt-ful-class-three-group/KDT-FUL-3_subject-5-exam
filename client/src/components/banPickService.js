import {autoRender} from "./function/renderHandler.js";
import {commitClickData} from "./function/commitClickData.js";

console.log("연결")
import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js"
console.log('obj확인',CHAMPOBJ.banPickData)

// src/function에 들어있는 모듈

// import { putDataToArray } from "./function/putDataToArray.js";

//클릭 횟수, 배열에 담길 순서를 결정할 변수

let count = CHAMPOBJ.count
// let finallCount = 10;
let clickData=[];
let finalClick = [];

//id, name을 객체로 담기

//[ ] section#list > div 선택하면 div#color > div에 담기
//10개 값이 다 확정되면 > 배열에 넣기
//배열 length

//밴 선택한 캐릭터 넣어줄 div 요소
const blueDiv = document.querySelectorAll('div#blue > div')
const redDiv = document.querySelectorAll('div#red > div')

const list = document.getElementById('list').children




function nextTurn() {
  if (count.total % 2 === 0) {
    count.blue++;
  } else {
    count.red++;
  }
  count.total++;
}

console.log(list)
//section#list
//짝수일 때는 blueDiv에
//홀수 일 때는 redDiv에
//숫자 사용을 위해 for문 사용

Array.from(list).forEach(div=>{

  div.setAttribute('style','cursor:pointer')

  //div 클릭 이벤트
  div.addEventListener('click',()=>{

    //click한 div의 속성값 배열에 넣기
    clickData.push({id : div.getAttribute('id'), name : div.getAttribute('name')})

    //마지막 요소만 남기기
    if(clickData.length>1){
      clickData.shift()
      console.log('click',clickData)
    }
    console.log(count)

    //div태그 안에 넣어주기
    if(count.all%2===0){
      blueDiv[count.blue].textContent = clickData[0].name
    } else {
      redDiv[count.red].textContent = clickData[0].name
    }
  })
})
//버튼
const choiceBtn = document.getElementById('choice')
//버튼 클릭 이벤트
choiceBtn.addEventListener('click', () => {
  if (count.total < 9) {
    commitClickData();
    nextTurn();
  }
  else if (count.total === 9) {
    commitClickData();
    nextTurn();
    // putDataToArray();
    saveFinalBanData();
    autoRender();
    alert('밴 완료했습니다');
  }
  else if (count.total > 10) {
    alert('11번째 입니다.');
  }
  console.log('last', finalClick);
});