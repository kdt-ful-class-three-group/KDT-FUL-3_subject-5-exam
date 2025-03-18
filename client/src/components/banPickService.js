console.log("연결")
import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js"
console.log('obj확인',CHAMPOBJ.banPickData)

// src/function에 들어있는 모듈
import { showBanList, showPickList } from "./function/showList.js";
import { divListClick } from "./function/divListClick.js";
import { commitClickData } from "./function/commitClickData.js";
import { nextTurn } from "./function/nextTurn.js";
import { saveFinalData } from "./function/saveFinalData.js";

//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = CHAMPOBJ.count

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData=[]; //실시간으로 담기는 배열
let finalClick = []; //최종 배열

//div 요소
const blueDiv = document.querySelectorAll('#ban > div#blue > div') //blue팀 ban리스트 목록
const redDiv = document.querySelectorAll('#ban > div#red > div') //red팀 ban리스트 목록
const bluePickDiv = document.querySelectorAll('#pick > div#blue > div') //red팀 ban리스트 목록
const redPickDiv = document.querySelectorAll('#pick > div#red > div') //red팀 ban리스트 목록
const list = document.getElementById('list').children //중앙 챔피언 리스트

//변수 초기화
function resetCount(count){
  count.blue = 0;
  count.red = 0;
  count.total = 0;
  finalClick = [];
}

//중앙챔피언리스트 클릭이벤트
Array.from(list).forEach(div=>{
  div.setAttribute('style','cursor:pointer')

  // div.setAttribute('style','opacity:0.5')
  //div 클릭 이벤트
  div.addEventListener('click',()=>{

    // div.setAttribute('style','opacity:0.5')

    //clickData에 선택한 목록 넣기
    divListClick(div,clickData)

    //클릭 카운트 확인
    console.log('count',count)

    //팀 리스트에 목록 보여주는 함수
    //ban 버튼 > ban리스트
    //pick 버튼 > pick리스트
    if(!document.getElementById('banBtn').classList.contains('display-none')){
      //각 팀 ban리스트 보여주기
      showBanList(count, clickData, blueDiv, redDiv)
    } else{
      showPickList(count,clickData, bluePickDiv, redPickDiv)
    }
  })
})

//ban버튼 클릭 이벤트
const banBtn = document.getElementById('banBtn')


banBtn.addEventListener('click',()=>{

    //1-9번
    if(count.total < 9) {
      //마지막으로 선택한 요소 담기
      commitClickData(list, clickData, finalClick);
      //blue, red 번갈아 진행
      nextTurn(count);
    }
    //10번
    else if(count.total === 9){
      //마지막으로 선택한 요소 담기
      commitClickData(list,clickData, finalClick);
      //blue, red 번갈아 진행
      nextTurn(count);
      //banpickData.color.ban에 데이터 담기
      saveFinalData(CHAMPOBJ,'ban',finalClick);

      //ban버튼 안보임 + pick버튼 보임
      banBtn.classList.toggle('display-none')
      pickBtn.classList.toggle('display-none')
        alert('ban 완료했습니다')

      //변수 초기화
      resetCount(count)
    }

})


const pickBtn = document.getElementById('pickBtn')
const restartBtn = document.getElementById('restart')

//pick버튼 클릭
pickBtn.addEventListener('click',()=>{

  if(clickData.length === 0){
    alert('픽을 진행해주세요')
    return
  }


  //1-9번
  if(count.total < 9) {
    //마지막으로 선택한 요소 담기
    commitClickData(list, clickData, finalClick);
    //blue, red 번갈아 진행
    nextTurn(count);
  }
  //10번
  else if(count.total === 9){

    //마지막으로 선택한 요소 담기
    commitClickData(list,clickData, finalClick);
    //blue red 번갈아 진행
    nextTurn(count);
    //banpickData.color.pick에 데이터 담기
    saveFinalData(CHAMPOBJ,'pick',finalClick);

    //pick버튼 안보임
    //다시하기 버튼 보임
    pickBtn.classList.toggle('display-none')
    restartBtn.classList.toggle('display-none')
    alert('완료했습니다');

    //console로 확인
    console.log(CHAMPOBJ.banPickData)
    console.log('last', finalClick);

    resetCount(count)
  }
})

restartBtn.addEventListener('click', () => {
  //리스트 초기화
  location.reload();
})


//30초 감소하는 걸 화면에 보여줘야함
//30초 지나면 버튼이 클릭되어야 함
//pick안하면 완전 처음부터 => 리셋버튼 눌림 + 'pick안해서 돌아감'