import { buttonChange } from "./buttonChange.js";
import { commitClickData } from "./commitClickData.js";
import { nextTurn } from "./nextTurn.js";
import { resetCount } from "./resetCount.js";
import { saveFinalData } from "./saveFinalData.js";
import { CHAMPOBJ } from "../../obj/CHAMPOBJ.js";

/**
 * 마지막 선택한 요소를 담고 blue, red 번갈아가면서 실행하는 함수
 */
export function getData( clickData,finalClick, count) {
  commitClickData(CHAMPOBJ.ELEMENT.list, clickData, finalClick)
  nextTurn(count)
}

function lastGetData(type,existButton, nextButton) {
  getData()
  saveFinalData(CHAMPOBJ, type, finalClick)
  buttonChange(existButton, nextButton)
  resetCount(count, finalClick)
}


    
      
      // //console로 확인
      // console.log(CHAMPOBJ.banPickData);
      // console.log("last", finalClick);

      // //20번 다 고르면 타이머 스탑
      // onTimerExpired();