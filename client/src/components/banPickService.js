console.log("연결");
import { CHAMPOBJ } from "../obj/CHAMPOBJ.js";
console.log("obj확인", CHAMPOBJ.banPickData);

// src/function에 들어있는 모듈
import { commitClickData } from "./function/commitClickData.js";
import { nextTurn } from "./function/nextTurn.js";
import { saveFinalData } from "./function/saveFinalData.js";
import { startTimer } from "./startTimer.js";
import { onTimerExpired } from "./onTimerExpired.js";

//분리하는 함수
import { resetCount } from "./function/resetCount.js";
import { buttonChange } from "./function/buttonChange.js";

//함수 실행 묶기
import { listDivClick } from "./function/listDivClick.js";
import { getData } from "./function/buttonClick.js";

//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = CHAMPOBJ.count;

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData = CHAMPOBJ.dataArray.clickData; //실시간으로 담기는 배열
let finalClick = CHAMPOBJ.dataArray.finalClick; //최종 배열

//div 요소
const ELEMENT = CHAMPOBJ.ELEMENT

//중앙챔피언리스트 클릭이벤트
ELEMENT.list.forEach((div) => {
  div.setAttribute('style','cursor:pointer')
  listDivClick(div,clickData,count,ELEMENT)
});


ELEMENT.banBtn.addEventListener("click", () => {
  startTimer(ELEMENT.banBtn);
  //1-9번
  if (count.total < 9) {
    getData(clickData,finalClick,count);
  }
  //10번
  else if (count.total === 9) {
    //마지막으로 선택한 요소 담기
    commitClickData(ELEMENT.list, clickData, finalClick);
    //blue, red 번갈아 진행
    nextTurn(count);
    //banpickData.color.ban에 데이터 담기
    saveFinalData(CHAMPOBJ, "ban", finalClick);

    //ban버튼 안보임 + pick버튼 보임
    buttonChange(ELEMENT.banBtn, ELEMENT.pickBtn)
    alert("ban 완료했습니다");
    //변수 초기화
    resetCount(count, finalClick);
  }
});

//pick버튼 클릭
ELEMENT.pickBtn.addEventListener("click", () => {
  //리스트 선택안하고 pick버튼 눌렀을 때
  if (clickData.length === 0) {
    alert("픽을 진행해주세요");
  } else {
    startTimer(ELEMENT.banBtn);
    //1-9번
    if (count.total < 9) {
      //마지막으로 선택한 요소 담기
      commitClickData(ELEMENT.list, clickData, finalClick);
      //blue, red 번갈아 진행
      nextTurn(count);
    }
    //10번
    else if (count.total === 9) {
      //마지막으로 선택한 요소 담기
      commitClickData(ELEMENT.list, clickData, finalClick);
      //blue red 번갈아 진행
      nextTurn(count);
      //banpickData.color.pick에 데이터 담기
      saveFinalData(CHAMPOBJ, "pick", finalClick);
      
      //pick버튼 안보임
      //다시하기 버튼 보임
      buttonChange(ELEMENT.pickBtn, ELEMENT.restartBtn)
      alert("완료했습니다");
      
      //console로 확인
      console.log(CHAMPOBJ.banPickData);
      console.log("last", finalClick);
      //count에 사용한 변수 리셋
      resetCount(count,finalClick);

      //20번 다 고르면 타이머 스탑
      onTimerExpired();
    }
  }
});

ELEMENT.restartBtn.addEventListener("click", () => {
  //리스트 초기화
  location.reload();
});

// // DOMContentLoaded 이벤트에서 setClickEvent 호출
// document.addEventListener("DOMContentLoaded", () => {
//   setClickEvent();
// });

//시작한다는 창에 확인 버튼 눌러야 시간초 시작
// alert("시작");
startTimer(ELEMENT.banBtn, ELEMENT.pickBtn);
