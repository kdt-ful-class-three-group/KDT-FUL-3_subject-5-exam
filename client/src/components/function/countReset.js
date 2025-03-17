import { CHAMPOBJ } from "../../obj/CHAMPOBJ_hyunjoon.js";

/**
 * count에 해당하는 숫자 리셋하는 함수
 * @param  {...any} count 리셋해줄 변수
 */
export function countReset(...count){
  Array.from(arguments).forEach(count => count = 0)
}