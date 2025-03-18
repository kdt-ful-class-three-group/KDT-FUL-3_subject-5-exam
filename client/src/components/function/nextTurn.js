/**
 * blue, red 번갈아 실행하도록 하는 함수
 * @param {object} count blue, red, total이 들어있는 객체
 */
export function nextTurn(count) {
  const blue = document.getElementById('blue');
  const red = document.getElementById('red');
  if (count.total % 2 === 0) {
    count.blue++;
    red.classList.remove('bg-[#FF000040]');
    blue.classList.add('bg-[#004F9D40]');
    console.log(blue);
  } else {
    count.red++;
    blue.classList.remove('bg-[#004F9D40]');
    red.classList.add('bg-[#FF000040]');
    console.log(red);
  }
  count.total++;
}