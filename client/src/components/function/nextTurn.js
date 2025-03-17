/**
 * blue, red 번갈아 실행하도록 하는 함수
 * @param {object} count blue, red, total이 들어있는 객체
 */
export function nextTurn(count) {
  if (count.total % 2 === 0) {
    count.blue++;
  } else {
    count.red++;
  }
  count.total++;
}