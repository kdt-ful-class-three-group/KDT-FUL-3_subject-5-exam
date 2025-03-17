console.log("연결")
import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js"
console.log('obj확인',CHAMPOBJ.banPickData)

// src/function에 들어있는 모듈
import { turnCheck } from "./function/turnCheck.js";
import { putDataToArray } from "./function/putDataToArray.js";


//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = {
    blue:0,
    red:0,
    get all() {
      return this.blue+this.red
    } ,
    total: 0
};

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
choiceBtn.addEventListener('click',()=>{
  //div를 클릭했을 때 선택버튼 누르면 최종 배열에 추가 + 클릭데이터 비우기
  if(count.total<9){
    turnCheck(list, CHAMPOBJ.clickLiveData,CHAMPOBJ.finalClickData)
    //함수 사용
    // if(clickData[0]){
    //   finalClick.push(clickData[0])
    //   console.log(clickData[0].id)
    //   Array.from(list).filter(div => {
    //     if (div.getAttribute('id') === clickData[0].id) {
    //       console.log("divtest", div);
    //       div.style.pointerEvents='none'
    //       div.style.color='red'
    //       return
    //     }
    //   })
    //   clickData = []
    // }else {
    //   //div를 클릭하지 않고 그냥 넘어갔을 경우
    //   finalClick.push({id:'ban',name:'ban'})
    // }
    // //blue red 번갈아가며 진행
    // if(count.total%2===0){
    //   count.blue++
    // } else {
    //   count.red++
    // }
    // count.total++;
  } 
  else if(count.total=9) {
    turnCheck(list, CHAMPOBJ.clickLiveData,CHAMPOBJ.finalClickData)
    // if(clickData[0]){
    //   finalClick.push(clickData[0])
    //   clickData = []
    // }else {
    //   //div를 클릭하지 않고 그냥 넘어갔을 경우
    //   finalClick.push({id:'ban',name:'ban'})
    // }
    // //blue red 번갈아가며 진행
    // if(count.total%2===0){
    //   count.blue++
    // } else {
    //   count.red++
    // }
    // count.total++;

    putDataToArray()

    CHAMPOBJ.banPickData.blue.ban = finalClick.filter((a,i)=>i%2===0)
    CHAMPOBJ.banPickData.red.ban = finalClick.filter((a,i)=>i%2!==0)
    console.log('최종',CHAMPOBJ.banPickData)
    alert('밴 완료했습니다')
  }
  //11번 - 20번 : pick
  else if(count.total>10){
    alert('11번째 입니다.')
  }
  //console로 확인
  console.log('last',finalClick)

})