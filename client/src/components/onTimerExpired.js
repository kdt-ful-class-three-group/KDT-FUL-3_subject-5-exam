import { CHAMPOBJ } from "../obj/CHAMPOBJ_yunjonghwan.js"

/**
 * @description 모든 과정이 완료되고 동작하고 있는 타이머 종료
 */
function onTimerExpired() {
  clearInterval(CHAMPOBJ.time.intervalName);
}

export { onTimerExpired }