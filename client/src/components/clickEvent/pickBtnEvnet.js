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
const restartBtn = document.getElementById('restart');

//pick버튼 클릭  
export function pickBtnEvent(){
//리스트 선택안하고 pick버튼 눌렀을 때
  if (clickData.length === 0) {
    // startTimer(banBtn);
    alert("픽을 진행해주세요");
    // return;
  } else {
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
      //blue red 번갈아 진행
      nextTurn(count);
      //banpickData.color.pick에 데이터 담기
      saveFinalData(CHAMPOBJ, "pick", finalClick);

      //pick버튼 안보임
      //다시하기 버튼 보임
      pickBtn.classList.toggle("hidden");
      restartBtn.classList.toggle("hidden");
      alert("완료했습니다");

      //console로 확인
      console.log(CHAMPOBJ.banPickData);
      console.log("last", finalClick);
      //count에 사용한 변수 리셋
      resetCount(count);

      //20번 다 고르면 타이머 스탑
      onTimerExpired();
    }
  }
};