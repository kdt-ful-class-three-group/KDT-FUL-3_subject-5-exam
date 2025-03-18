/**
 * blue, red 번갈아 실행하도록 하는 함수
 * @param {object} count blue, red, total이 들어있는 객체
 */
export function nextTurn(count) {
  const blue = document.getElementById('blue');
  const red = document.getElementById('red');

  if (count.total % 2 === 0) {
    count.blue++;
    blue.style.backgroundColor = "";
    red.style.backgroundColor = "#ff000082";
  } else {
    count.red++;
    red.style.backgroundColor = "";
    blue.style.backgroundColor = "#0080ff82";

  }
  count.total++;
}