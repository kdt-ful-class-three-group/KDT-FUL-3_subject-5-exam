import { divListClick } from "./divListClick.js";
import { showList } from "./showList.js";
/**
 * 중앙 챔피언 리스트를 클릭했을 때 이벤트 발생 함수
 * @param {Element} div 중앙 챔피언 리스트 
 * @param {Array} clickData 선택한 챔피언이 실시간으로 담기는 배열
 * @param {Object} count 카운트에 필요한 변수가 담기는 객체
 * @param {Element} ELEMENT 선택한 요소를 보여줄 element가 담긴 객체
 */
export function listDivClick(div,clickData,count,ELEMENT) {
  div.addEventListener('click', () => {
    divListClick(div, clickData, count)
    console.log('count', count)
    showList(count,clickData,ELEMENT)
  })
}