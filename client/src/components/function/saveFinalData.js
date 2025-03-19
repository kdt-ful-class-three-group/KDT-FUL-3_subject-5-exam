import { sendBanPickData } from "../sendBanPickData.js";

/**
 * 최종 확정된 목록들을 데이터에 담는 함수
 * @param {Object} CHAMPOBJ 데이터가 들어있는 객체
 * @param {string} type ban / pick 으로 들어갈 데이터 선택
 * @param {array} finalClick 마지막으로 선택한 요소
 */

export function saveFinalData(CHAMPOBJ,type,finalClick){

  if(type === 'ban'){
    CHAMPOBJ.banPickData.blue.ban = finalClick.filter((_, i) => i % 2 === 0);
    CHAMPOBJ.banPickData.red.ban = finalClick.filter((_, i) => i % 2 !== 0);
    console.log('ban',CHAMPOBJ.banPickData)
  } else if(type === 'pick'){
    CHAMPOBJ.banPickData.blue.pick = finalClick.filter((_, i) => i % 2 === 0);
    CHAMPOBJ.banPickData.red.pick = finalClick.filter((_, i) => i % 2 !== 0);
    console.log('pick',CHAMPOBJ.banPickData)
    sendBanPickData(CHAMPOBJ.banPickData);
  }
}
