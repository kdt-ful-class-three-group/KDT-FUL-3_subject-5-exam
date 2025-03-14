import { CHAMPOBJ } from "../obj/CHAMPOBJ_yunjonghwan.js"

function startTimer() {
  let timer;
  const time = CHAMPOBJ.time;
  console.log('end?');
  
  timer = setInterval(() => {
    time.count--;
    console.log(time.count + "초");
    if (time.count === 25) {
      clearInterval(timer);
      test();
    }
    // return time.count;
  }, time.second);
}

startTimer();

function test() {
  startTimer();
}

export { startTimer }