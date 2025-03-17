import {sendBanPickData} from "../sendBanPickData.js";

/**
 * 최종 확정된 목록들을 데이터에 담는 함수
 * @param {Object} CHAMPOBJ 데이터가 들어있는 객체
 * @param {array} finalClick 마지막으로 선택한 요소
 */
export function saveFinalBanData(CHAMPOBJ,finalClick){
  

  CHAMPOBJ.banPickData.blue.ban = finalClick.filter((_, i) => i % 2 === 0);
  CHAMPOBJ.banPickData.red.ban = finalClick.filter((_, i) => i % 2 !== 0);
  // blue와 red의 BanPickData를 저장하기 위한 function
  sendBanPickData(CHAMPOBJ.banPickData);
}
