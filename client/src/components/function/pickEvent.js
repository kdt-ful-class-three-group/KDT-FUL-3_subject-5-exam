import { CHAMPOBJ } from "../../obj/CHAMPOBJ.js";

const ELEMENT = CHAMPOBJ.ELEMENT;

export function pickEvent(count, banORpick) {
  const blueImg = ELEMENT.blueDiv.querySelectorAll("img")[count.blue];
  if (banORpick === "pick") {
    // const blueImg = ELEMENT.bluePickDiv[count.blue];
    // if (blueImg) {
    //   if (blueImg.classList.contains("Pick-border")) {
    //     ELEMENT.bluePickDiv[count.blue].classList.remove("Pick-border");
    //   } else {
    //     ELEMENT.bluePickDiv[count.blue].classList.add("Pick-border");
    //   }
    // }
    // console.log(banORpick);
  } else if (banORpick === "ban" && count.total % 2 === 0) {
    blueImg.classList.add("Pick-border");
    ELEMENT.redDiv
      .querySelectorAll("img")
      [count.red - 1].classList.remove("Pick-border");
    console.log(banORpick);
  } else {
    ELEMENT.redDiv
      .querySelectorAll("img")
      [count.red].classList.add("Pick-border");
    ELEMENT.blueDiv
      .querySelectorAll("img")
      [count.blue - 1].classList.remove("Pick-border");
  }
  console.log("blue", count.blue);
  if (count.total % 2 === 0) {
  }
}
