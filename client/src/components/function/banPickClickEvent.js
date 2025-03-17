import { commitClickData } from "./commitClickData.js";
import { nextTurn } from "./nextTurn.js";
import { saveFinalData } from "./saveFinalData.js";
import { CHAMPOBJ } from "../../obj/CHAMPOBJ_hyunjoon.js";
import { changeBtn } from "./changeBtn.js";


export function banPickClickEvent(button,count,type,listDiv,clickData,finalClick){
  button.addEventListener('click',()=>{
    if(count.total < 9) {
      commitClickData(listDiv, clickData, finalClick);
      nextTurn(count);
    } 
    else if(count.total === 9){
      commitClickData(listDiv,clickData, finalClick);
      nextTurn(count);
      saveFinalData(CHAMPOBJ,type,finalClick);
      alert('완료했습니다');
    }
  })
}