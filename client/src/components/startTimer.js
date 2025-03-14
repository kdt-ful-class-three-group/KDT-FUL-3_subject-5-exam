import { CHAMPOBJ } from "../obj/CHAMPOBJ_yunjonghwan.js"

function startTimer() {
  const time = CHAMPOBJ.time;
  setInterval(() => {
    time.count += 1;
    console.log(time.count + "초")
    return ;
  },time.second);
}

startTimer();

export { startTimer }