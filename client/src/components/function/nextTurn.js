/**
 * blue, red 번갈아 실행하도록 하는 함수
 * @param {object} count blue, red, total이 들어있는 객체
 */
export function nextTurn(count) {
  const blue = document.getElementById('blue');
  const red = document.getElementById('red');
  const banBtn = document.getElementById('banBtn');
  const pickBtn = document.getElementById('pickBtn');

  if (count.total % 2 === 0) {
    blue.classList.remove('bg-[#004F9D40]');
    red.classList.add('bg-[#FF000040]');
    banBtn.classList.remove('bg-[#3131FF]');
    banBtn.classList.add('bg-[#B22222]');
    pickBtn.classList.remove('bg-[#3131FF]');
    pickBtn.classList.add('bg-[#B22222]');
    count.blue++;
  } else {
    count.red++;
    red.classList.remove('bg-[#FF000040]');
    blue.classList.add('bg-[#004F9D40]');
    banBtn.classList.remove('bg-[#B22222]');
    banBtn.classList.add('bg-[#3131FF]');
    pickBtn.classList.remove('bg-[#B22222]');
    pickBtn.classList.add('bg-[#3131FF]');
  }
  count.total++;
}