import {CHAMPOBJ} from "../../obj/CHAMPOBJ_hyunjoon.js";

export function turnCheck(){
    if(CHAMPOBJ.clickData[0]){
        CHAMPOBJ.finalClick.push(clickData[0])

        clickData = []
    }else {
        //div를 클릭하지 않고 그냥 넘어갔을 경우
        finalClick.push({id:'ban',name:'ban'})
    }
    //blue red 번갈아가며 진행
    if(count.total%2===0){
        count.blue++
    } else {
        count.red++
    }
    count.total++;
}

}



