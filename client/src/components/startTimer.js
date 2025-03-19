import { CHAMPOBJ } from "../obj/CHAMPOBJ.js";
import { timerTag } from "./function/timerTag.js";

/**
 * @description 타이머가 동작하며 초가 0이 되면 다시 동작한다.
 * @param banBtn document.getElementId('banBtn')
 */
function startTimer() {
  const time = CHAMPOBJ.time;
  let banBtn = CHAMPOBJ.ELEMENT.banBtn
  //intervalName을 멈춤, 30초로 초기화
  if (time.intervalName !== "") {
    clearInterval(time.intervalName);
    time.second = 30;
  }

  //타이머 시작
  time.intervalName = setInterval(() => {
    timerTag(time);
    time.second--;
    //브라우저에 시간초 보여줌

    //0초가 되면
    if (time.second === 0) {
      //타이머 계속 돌아감
      startTimer();

      //버튼이 눌림
      //ban일 땐 banBtn
      //pick일 땐 페이지 새로고침
      if (!banBtn.classList.contains("hidden")) {
        banBtn.click();
      } else {
        location.reload();
      }
    }
  }, time.intervalTime);
}

export { startTimer };
