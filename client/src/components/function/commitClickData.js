import { deactivateClickedDiv } from "./deactivateClickedDiv.js";
import { CHAMPOBJ } from "../../obj/CHAMPOBJ_hyunjoon.js";

/**
 * 마지막으로 선택한 요소를 배열에 담는 함수
 * @param {Element} list document.getElementById('list').children
 * @param {Array} clickData 선택한 목록
 * @param {Array} finalClick button 클릭으로 확정한 마지막 목록
 */
export function commitClickData(list, clickData, finalClick) {
  let data = {};

  if(clickData[0]){
    data = clickData[0]
  } else {
    data = CHAMPOBJ.noneClick
  }
  
  finalClick.push(data);

  if (clickData.length > 0) {
    const id = clickData[0].id;
    deactivateClickedDiv(id, list);
    clickData.length = 0;
  }
}