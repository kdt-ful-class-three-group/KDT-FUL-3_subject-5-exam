import { CHAMPOBJ } from "../obj/CHAMPOBJ_yunjonghwan.js"
import { timerTag } from "./function/timerTag.js";

/**
 * @description 타이머가 동작하며 초가 0이 되면 다시 동작한다.
 */
function startTimer() {
  const time = CHAMPOBJ.time;
  //intervalName을 멈춤, 30초로 초기화
  if(time.intervalName !== '') {
    clearInterval(time.intervalName);
    time.second = 30;
  }
  
  //타이머 시작
  time.intervalName = setInterval(() => {
    time.second--;
    if(time.second === 0) {
      startTimer();
    }
    timerTag(time)
  }, time.intervalTime);
}

export { startTimer }