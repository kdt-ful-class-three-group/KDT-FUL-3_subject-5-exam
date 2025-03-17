import { CHAMPOBJ } from "../../obj/CHAMPOBJ_hyunjoon.js";
import { turnCheck } from "./turnCheck.js";

/**
 * 최종데이터에 마지막으로 클릭한 요소 담기
 * @param {Array} blueDataArray blue팀의 데이터가 담길 배열, banPickData.blue.ban / banPickData.blue.pick
 * @param {Array} redDataArray red팀의 데이터가 담길 배열, banPickData.red.ban / banPickData.red.pick
 * @param {Array} finalClickData 최종 선택
 * @returns blueDataArray, redDataArray
 */
export function putDataToArray(blueDataArray,redDataArray,finalClickData){

  blueDataArray = finalClickData.filter((_,i)=> i%2 === 0)
  redDataArray = finalClickData.filter((_,i)=> i%2 !==0)

  return {blueDataArray, redDataArray}
}
