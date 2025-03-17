import { CHAMPOBJ } from "../../obj/CHAMPOBJ_hyunjoon.js";

/**
 * blue red 번갈아가며 진행하게 해줄 카운트 함수
 */
export function turn() {
  if(CHAMPOBJ.count.total %2 === 0){
    CHAMPOBJ.count.blue++
  } else {
    CHAMPOBJ.count.red++
  }
  CHAMPOBJ.count.total++
}