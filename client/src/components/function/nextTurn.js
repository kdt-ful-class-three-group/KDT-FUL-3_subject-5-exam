import { CHAMPOBJ } from "../../obj/CHAMPOBJ_hyunjoon.js";

let count = CHAMPOBJ.count

export function nextTurn() {
  if (count.total % 2 === 0) {
    count.blue++;
  } else {
    count.red++;
  }
  count.total++;
}