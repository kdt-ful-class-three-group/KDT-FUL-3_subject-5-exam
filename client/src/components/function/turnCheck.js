import { CHAMPOBJ } from "../../obj/CHAMPOBJ_hyunjoon.js";
import { turn } from "./turn.js";

/**
 * 선택버튼을 눌렀을 때 최종선택이 데이터에 담길 수 있게 해주는 함수
 * @param {*} listElement  목록에 해당하는 요소
 * @param {Array} clickLiveData 선택한 목록이 담길 배열
 * @param {Array} finalClickData 최종 선택이 담길 배열
 * @returns {Array} finalClickData 최종 선택이 담긴 배열
 */
export function turnCheck(listElement,clickLiveData, finalClickData ){
  //clickLiveData의 값이 있을 때
  if(clickLiveData[0]){

    //최종 배열에 값 넣어주기
    finalClickData.push(clickLiveData[0])

    //최종 값에 해당하는 div를 선택하지 못하도록 함
    Array.from(listElement).filter(div => {
      if(div.getAttribute('id')===clickLiveData[0].id){
        console.log('choiceDiv',div);
        div.style.pointerEvents='none'
        div.style.color='red'
        return
      }
    })
    //다음 단계를 위해 비워줌
    clickLiveData=[]
  }
  //div선택하지 않고 버튼 눌렀을 때
  else {
    finalClickData.push(CHAMPOBJ.noneClick)
  }
  
  turn();

  return finalClickData
}