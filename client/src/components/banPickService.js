console.log("연결")
import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js"
console.log('obj확인',CHAMPOBJ.banPickData)

// src/function에 들어있는 모듈
import { changeBtn } from "./function/changeBtn.js";
import { showList } from "./function/showList.js";
import { divListClick } from "./function/divListClick.js";
import { banPickClickEvent } from "./function/banPickClickEvent.js";

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

  // div.setAttribute('style','opacity:0.5')
  //div 클릭 이벤트
  div.addEventListener('click',()=>{

    div.setAttribute('style','opacity:0.5')

    divListClick(div,clickData)
    
    //클릭 카운트 확인
    console.log('count',count)

    if(document.getElementsByTagName('button')[0].id === 'choice'){
      //각 팀 ban리스트 보여주기
      showList(count, clickData, blueDiv, redDiv)
    } else if(document.getElementsByTagName('button')[0].id === 'select'){
      showList(count,clickData, bluePickDiv, redPickDiv)
    }
  })
})

//ban버튼 클릭 이벤트
const banBtn = document.getElementById('choice')

banPickClickEvent(banBtn,count,'ban',list,clickData,finalClick)
changeBtn('choice','select','pick선택')

console.log('last', finalClick);

function resetCount(count){
  count.blue = 0;
  count.red = 0;
  count.total = 0;
}

resetCount(count)

const bluePickDiv = document.querySelectorAll('#pick > div#blue > div')
const redPickDiv = document.querySelectorAll('#pick > div#red > div')
const pickBtn = document.getElementById('select')

banPickClickEvent(pickBtn,count,'pick',list,clickData,finalClick)