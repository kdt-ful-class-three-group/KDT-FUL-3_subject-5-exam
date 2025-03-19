console.log("연결");
import { CHAMPOBJ } from "../obj/CHAMPOBJ.js";
console.log("obj확인", CHAMPOBJ.banPickData);

// src/function에 들어있는 모듈
import { startTimer } from "./startTimer.js";

//함수 실행 묶기
import { listDivClick } from "./function/listDivClick.js";

//버튼 이벤트 함수
import { banBtnEvent } from "./btnEvent/banBtnEvent.js";
import { pickBtnEvent } from "./btnEvent/pickBtnEvent.js";
import { restartBtnEvent } from "./btnEvent/restartBtnEvent.js";

//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = CHAMPOBJ.count;

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData = CHAMPOBJ.dataArray.clickData; //실시간으로 담기는 배열

//div 요소
const ELEMENT = CHAMPOBJ.ELEMENT;

//중앙챔피언리스트 클릭이벤트
export function startFun() {
  ELEMENT.list.forEach((div) => {
    div.setAttribute("style", "cursor:pointer");
    listDivClick(div, clickData, count, ELEMENT);
  });
  // 각 버튼에 이벤트 추가
  ELEMENT.banBtn.addEventListener("click", banBtnEvent);
  ELEMENT.pickBtn.addEventListener("click", pickBtnEvent);
  ELEMENT.restartBtn.addEventListener("click", restartBtnEvent);
}


//시작한다는 창에 확인 버튼 눌러야 시간초 시작
// alert("시작");
startTimer(ELEMENT.banBtn, ELEMENT.pickBtn);
