import { CHAMPOBJ } from "../../obj/CHAMPOBJ.js";
import { commitClickData } from "../function/commitClickData.js";
import { nextTurn } from "../function/nextTurn.js";
import { saveFinalData } from "../function/saveFinalData.js";
import { buttonChange } from "../function/buttonChange.js";
import { resetCount } from "../function/resetCount.js";
import { startTimer } from "../startTimer.js";
import { onTimerExpired } from "../onTimerExpired.js";
import { pickEvent } from "../function/pickEvent.js";

let count = CHAMPOBJ.count;

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData = CHAMPOBJ.dataArray.clickData; //실시간으로 담기는 배열
let finalClick = CHAMPOBJ.dataArray.finalClick; //최종 배열

//div 요소
const ELEMENT = CHAMPOBJ.ELEMENT;

//pick버튼 이벤트 함수
export function pickBtnEvent() {
  let banORpick = "pick";
  //리스트 선택안하고 pick버튼 눌렀을 때
  if (clickData.length === 0) {
    alert("픽을 진행해주세요");
  } else {
    startTimer();
    //1-9번
    if (count.total < 9) {
      //마지막으로 선택한 요소 담기
      commitClickData(ELEMENT.list, clickData, finalClick);
      //blue, red 번갈아 진행
      nextTurn(count);
      pickEvent(count, banORpick);
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
      buttonChange(ELEMENT.pickBtn, ELEMENT.restartBtn);
      alert("완료했습니다");

      //console로 확인
      console.log(CHAMPOBJ.banPickData);
      // console.log("last", finalClick);
      //count에 사용한 변수 리셋
      resetCount(count, finalClick);
      ELEMENT.redPickDiv[4].classList.remove("Pick-red-border");
      //20번 다 고르면 타이머 스탑
      onTimerExpired();
      if (ELEMENT.list) {
        for (let index = 0; index < ELEMENT.list.length; index++) {
          ELEMENT.list[index].classList.add("pointer-events-none");
        }
      } else {
        console.log(ELEMENT.list);
      }
      // ELEMENT.list.style.pointerEvents = "none";
    }
  }
}
