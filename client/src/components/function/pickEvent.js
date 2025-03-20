import { CHAMPOBJ } from "../../obj/CHAMPOBJ.js";

const ELEMENT = CHAMPOBJ.ELEMENT;

export function pickEvent(count, banORpick) {
  // const blueImg = ELEMENT.blueDiv.querySelectorAll("img")[count.blue];
  if (banORpick === "pick") {
    // const blueImg = ELEMENT.bluePickDiv[count.blue];
    // if (blueImg) {
    //   if (blueImg.classList.contains("Pick-border")) {
    //     ELEMENT.bluePickDiv[count.blue].classList.remove("Pick-border");
    //   } else {
    //     ELEMENT.bluePickDiv[count.blue].classList.add("Pick-border");
    //   }
    // }
    if (count.total % 2 === 0) {
      // ELEMENT.blueDiv
      //   .querySelectorAll("img")
      //   [count.blue].classList.add("Pick-blue-border");
      // ELEMENT.redDiv
      //   .querySelectorAll("img")
      //   [count.red - 1].classList.remove("Pick-red-border");
      // console.log(banORpick);
      ELEMENT.bluePickDiv[count.blue].classList.add("Pick-blue-border");
      ELEMENT.redPickDiv[count.red - 1].classList.remove("Pick-red-border");
    } else {
      ELEMENT.redPickDiv[count.red].classList.add("Pick-red-border");
      ELEMENT.bluePickDiv[count.blue - 1].classList.remove("Pick-blue-border");
      // ELEMENT.redDiv
      //   .querySelectorAll("img")
      //   [count.red].classList.add("Pick-red-border");
      // ELEMENT.blueDiv
      //   .querySelectorAll("img")
      //   [count.blue - 1].classList.remove("Pick-blue-border");
    }
    // console.log(banORpick);
  } else if (banORpick === "ban") {
    if (count.total % 2 === 0) {
      ELEMENT.blueDiv
        .querySelectorAll("img")
        [count.blue].classList.add("Pick-blue-border");
      ELEMENT.redDiv
        .querySelectorAll("img")
        [count.red - 1].classList.remove("Pick-red-border");
      console.log(banORpick);
    } else {
      ELEMENT.redDiv
        .querySelectorAll("img")
        [count.red].classList.add("Pick-red-border");
      ELEMENT.blueDiv
        .querySelectorAll("img")
        [count.blue - 1].classList.remove("Pick-blue-border");
    }
  }
}
