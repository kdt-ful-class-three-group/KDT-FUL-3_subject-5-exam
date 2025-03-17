
/**
 * 최종데이터에 마지막으로 클릭한 요소 담기
 * @param {Array} blueDataArray blue팀의 데이터가 담길 배열, banPickData.blue.ban / banPickData.blue.pick
 * @param {Array} redDataArray red팀의 데이터가 담길 배열, banPickData.red.ban / banPickData.red.pick
 * @param {Array} finalClickData 최종 선택
 * @returns blueDataArray, redDataArray
 */
export function saveFinalBanData(blueDataArray,redDataArray,finalClick){

  blueDataArray = finalClick.filter((_, i) => i % 2 === 0);
  redDataArray = finalClick.filter((_, i) => i % 2 !== 0);
}
