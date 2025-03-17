console.log("연결")
import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js"
console.log('obj확인',CHAMPOBJ.banPickData)

// src/function에 들어있는 모듈
import { commitClickData } from "./function/commitClickData.js";
import { saveFinalBanData } from "./function/saveFinalBanData.js";
import { nextTurn } from "./function/nextTurn.js";

//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = CHAMPOBJ.count

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData=[]; //실시간으로 담기는 배열
let finalClick = []; //최종 배열

//div 요소
const blueDiv = document.querySelectorAll('#ban > div#blue > div') //blue팀 ban리스트 목록
const redDiv = document.querySelectorAll('#ban > div#red > div') //red팀 ban리스트 목록
const list = document.getElementById('list').children //중앙 챔피언 리스트

//중앙챔피언리스트 클릭이벤트
Array.from(list).forEach(div=>{
  div.setAttribute('style','cursor:pointer')

  //div 클릭 이벤트
  div.addEventListener('click',()=>{

    //click한 div의 속성값 배열에 넣기
    clickData.push({id : div.getAttribute('id'), name : div.getAttribute('name')})


    //중앙 리스트 선택할 때 실시간으로 핸들링 하는 로직 : 마지막 요소만 남기기
    if(clickData.length>1){
      clickData.shift()
      console.log('click',clickData)
    }
    console.log('count',count)

    //각 팀 ban리스트 보여주기
    if(count.all%2===0){
      blueDiv[count.blue].textContent = clickData[0].id
    } else {
      redDiv[count.red].textContent = clickData[0].id
    }
  })
})


//버튼
const choiceBtn = document.getElementById('choice')
//버튼 클릭 이벤트
choiceBtn.addEventListener('click', () => {

  //1-9번 진행
  if (count.total < 9) {
    commitClickData(list, clickData, finalClick);
    nextTurn(count);
  }
  //10번 : 최종 ban리스트 데이터 (CHAMPOBJ.banpickData.color.ban)에 담기
  else if (count.total === 9) {
    commitClickData(list,clickData, finalClick);
    nextTurn(count);
    saveFinalBanData(CHAMPOBJ, finalClick);
    alert('밴 완료했습니다');
  } 
  //11번 눌렀을 때
  else {
    alert('완료')
  }
  console.log('last', finalClick);
});