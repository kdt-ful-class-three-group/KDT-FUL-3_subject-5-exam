import { buttonChange } from "./buttonChange.js";
import { commitClickData } from "./commitClickData.js";
import { nextTurn } from "./nextTurn.js";
import { resetCount } from "./resetCount.js";
import { saveFinalData } from "./saveFinalData.js";
import { CHAMPOBJ } from "../../obj/CHAMPOBJ.js";

/**
 * 마지막 선택한 요소를 담고 blue, red 번갈아가면서 실행하는 함수
 */
export function getData() {
  let clickData = CHAMPOBJ.dataArray.clickData
  let finalClick = CHAMPOBJ.dataArray.finalClick
  let count = CHAMPOBJ.count
  commitClickData(CHAMPOBJ.ELEMENT.list, clickData, finalClick)
  nextTurn(count)
}
/**
 * 10번째 클릭 후 data를 저장하고 버튼을 바꾸고 변수 초기화 진행하는 함수
 * @param {String} type 'ban' / 'pick' 작성 
 * @param {Element} existButton 현재 버튼
 * @param {Element} nextButton 다음 진행할 버튼
 */
export function lastGetData(type, existButton, nextButton) {
  let finalClick = CHAMPOBJ.dataArray.finalClick
  let count = CHAMPOBJ.count
  getData()
  saveFinalData(CHAMPOBJ, type, finalClick)
  buttonChange(existButton, nextButton)
  resetCount(count, finalClick)
}