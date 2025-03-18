/**
 *  timer를 h1태그에 보여주는 함수
 * @param {object} time second가 포함된 객체 
 */
export function timerTag(time){
  let h1 = document.getElementById('timer').children[0]
  h1.textContent = time.second +'초'
}