import { CHAMPOBJ } from "../../obj/CHAMPOBJ_hyunjoon.js";

/**
 * 
 */
export function turnCheck(listElement,clickLiveData, fincalClickData ){
  //clickLiveData의 값이 있을 때
  if(clickLiveData[0]){

    //최종 배열에 값 넣어주기
    fincalClickData.push(clickLiveData[0])

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
    fincalClickData.push(CHAMPOBJ.noneClick)
  }
}
  if(clickData[0]){
    finalClick.push(clickData[0])
    console.log(clickData[0].id)
    Array.from(list).filter(div => {
      if (div.getAttribute('id') === clickData[0].id) {
        console.log("divtest", div);
        div.style.pointerEvents='none'
        div.style.color='red'
        return
      }
    })
    clickData = []
  }else {
    //div를 클릭하지 않고 그냥 넘어갔을 경우
    finalClick.push({id:'ban',name:'ban'})
  }
  //blue red 번갈아가며 진행
  //? 이것도 분리?
  if(count.total%2===0){
    count.blue++
  } else {
    count.red++
  }
  count.total++;