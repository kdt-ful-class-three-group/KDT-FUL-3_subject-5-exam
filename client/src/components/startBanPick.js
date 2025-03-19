import { startFun } from "./banPickService.js";
let startBanBtn = document.getElementById("startBanPickBtn");
let banpick = document.getElementById("root");
startBanBtn.addEventListener("click", () => {
  let startBanPick = document.getElementById("startBanContainer");
  banpick.style.display = "flex";
  startBanPick.style.display = "none";
  startFun();
  //lst for 함수 넣을 곳
});

// banpick.style.display = "flex";
// startBanPick.style.display = "none";
