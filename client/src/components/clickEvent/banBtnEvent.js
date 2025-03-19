import { CHAMPOBJ } from "../../obj/CHAMPOBJ.js";
// src/function에 들어있는 모듈
import { commitClickData } from "../function/commitClickData.js";
import { saveFinalData } from "../function/saveFinalData.js";
import { nextTurn } from "../function/nextTurn.js";
import { startTimer } from "../startTimer.js";
import { resetCount } from "../banPickService.js";
//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = CHAMPOBJ.count;

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData = []; //실시간으로 담기는 배열
let finalClick = []; //최종 배열

//div 요소
const list = document.getElementById("list").children; //중앙 챔피언 리스트
const pickBtn = document.getElementById("pickBtn");
const banBtn = document.getElementById('banBtn');


export function banBtnEvent() {
startTimer(banBtn);
  //1-9번
  if (count.total < 9) {
    //마지막으로 선택한 요소 담기
    commitClickData(list, clickData, finalClick);
    //blue, red 번갈아 진행
    nextTurn(count);
  }
  //10번
  else if (count.total === 9) {
    //마지막으로 선택한 요소 담기
    commitClickData(list, clickData, finalClick);
    //blue, red 번갈아 진행
    nextTurn(count);
    //banpickData.color.ban에 데이터 담기
    saveFinalData(CHAMPOBJ, "ban", finalClick);

    //ban버튼 안보임 + pick버튼 보임
    banBtn.classList.toggle("hidden");
    pickBtn.classList.toggle("hidden");
    alert("ban 완료했습니다");
    //변수 초기화
    resetCount(count);
  }
};
