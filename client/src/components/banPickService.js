console.log("연결");
import { CHAMPOBJ } from "../obj/CHAMPOBJ.js";
console.log("obj확인", CHAMPOBJ.banPickData);

// src/function에 들어있는 모듈
import { startTimer } from "./startTimer.js";

//함수 실행 묶기
import { listDivClick } from "./function/listDivClick.js";
import { buttonClick } from "./function/buttonClick.js";

//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = CHAMPOBJ.count;
//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData = CHAMPOBJ.dataArray.clickData; //실시간으로 담기는 배열
//div 요소
const ELEMENT = CHAMPOBJ.ELEMENT

//중앙챔피언리스트 클릭이벤트
ELEMENT.list.forEach((div) => {
  div.setAttribute('style','cursor:pointer')
  listDivClick(div,clickData,count,ELEMENT)
});


ELEMENT.banBtn.addEventListener("click", () => {
  buttonClick('ban', ELEMENT.banBtn, ELEMENT.pickBtn)
});

//pick버튼 클릭
ELEMENT.pickBtn.addEventListener("click", () => {
  //리스트 선택안하고 pick버튼 눌렀을 때
  if (clickData.length === 0) {
    alert("픽을 진행해주세요");
  } else {
    buttonClick('pick',ELEMENT.pickBtn,ELEMENT.restartBtn)
  }
});

ELEMENT.restartBtn.addEventListener("click", () => {
  //리스트 초기화
  location.reload();
});

//alert후 타이머 실행
startTimer(ELEMENT.banBtn);
