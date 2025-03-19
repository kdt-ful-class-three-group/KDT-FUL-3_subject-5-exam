/**
 * 카운트에 필요한 변수와 최종 선택이 담기는 배열을 초기화 하는 함수
 * @param {Object} count 카운트에 필요한 변수가 들어있는 객체
 * @param {Array} finalClick 최종 선택이 담기는 배열
 */
export function resetCount(count,finalClick) {
  count.blue = 0;
  count.red = 0;
  count.total = 0;
  finalClick.length = 0;
}