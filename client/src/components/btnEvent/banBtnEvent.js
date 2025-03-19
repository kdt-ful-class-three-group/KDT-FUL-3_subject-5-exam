import { CHAMPOBJ } from "../../obj/CHAMPOBJ.js";
import { commitClickData } from "../function/commitClickData.js";
import { nextTurn } from "../function/nextTurn.js";
import { saveFinalData } from "../function/saveFinalData.js";
import { buttonChange } from "../function/buttonChange.js";
import { resetCount } from "../function/resetCount.js";
import { startTimer } from "../startTimer.js";

let count = CHAMPOBJ.count;

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData = CHAMPOBJ.dataArray.clickData; //실시간으로 담기는 배열
let finalClick = CHAMPOBJ.dataArray.finalClick; //최종 배열

//div 요소
const ELEMENT = CHAMPOBJ.ELEMENT;

// ban버튼 클릭 이벤트 함수
export function banBtnEvent() {
  startTimer();
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
    //blue, red 번갈아 진행
    nextTurn(count);
    //banpickData.color.ban에 데이터 담기
    saveFinalData(CHAMPOBJ, "ban", finalClick);

    //ban버튼 안보임 + pick버튼 보임
    buttonChange(ELEMENT.banBtn, ELEMENT.pickBtn);
    alert("ban 완료했습니다");
    //변수 초기화
    resetCount(count, finalClick);
  }
};