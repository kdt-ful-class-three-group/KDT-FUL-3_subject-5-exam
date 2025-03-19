console.log("연결");
import { CHAMPOBJ } from "../obj/CHAMPOBJ.js";
console.log("obj확인", CHAMPOBJ.banPickData);

// src/function에 들어있는 모듈
import { showBanList, showPickList } from "./function/showList.js";
import { divListClick } from "./function/divListClick.js";
import { startTimer } from "./startTimer.js";
import { banBtnEvent } from "./clickEvent/banBtnEvent.js";
import { pickBtnEvent } from "./clickEvent/pickBtnEvnet.js";
//클릭 횟수, 배열에 담길 순서를 결정할 변수
let count = CHAMPOBJ.count;

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData = []; //실시간으로 담기는 배열
let finalClick = []; //최종 배열

//div 요소
const blueDiv = document.getElementById("blueBan"); //blue팀 ban리스트 목록
const redDiv = document.getElementById("redBan"); //red팀 ban리스트 목록
const bluePickDiv = document.querySelectorAll("#bluePick > div"); //red팀 ban리스트 목록
const redPickDiv = document.querySelectorAll("#redPick > div"); //red팀 ban리스트 목록
const list = document.getElementById("list").children; //중앙 챔피언 리스트
const pickBtn = document.getElementById("pickBtn");
const banBtn = document.getElementById("banBtn");
const restartBtn = document.getElementById("restart");

//변수 초기화
export function resetCount(count) {
  count.blue = 0;
  count.red = 0;
  count.total = 0;
  finalClick = [];
}

//중앙챔피언리스트 클릭이벤트
  Array.from(list).forEach((div) => {
    div.setAttribute("style", "cursor:pointer");

    //div 클릭 이벤트

    div.addEventListener("click", () => {
      //clickData에 선택한 목록 넣기
      divListClick(div, clickData);
      //클릭 카운트 확인
      console.log("count", count);

      //팀 리스트에 목록 보여주는 함수
      //ban 버튼 > ban리스트
      //pick 버튼 > pick리스트
      if (!document.getElementById("banBtn").classList.contains("hidden")) {
        //각 팀 ban리스트 보여주기
        showBanList(count, clickData, blueDiv, redDiv);
      } else {
        showPickList(count, clickData, bluePickDiv, redPickDiv);
      }
    });
  });
  banBtn.addEventListener('click', banBtnEvent);
  pickBtn.addEventListener('click', pickBtnEvent);
//ban버튼 클릭 이벤트

// banBtn.addEventListener("click", () => {
//   startTimer(banBtn);
//   //1-9번
//   if (count.total < 9) {
//     //마지막으로 선택한 요소 담기
//     commitClickData(list, clickData, finalClick);
//     //blue, red 번갈아 진행
//     nextTurn(count);
//   }
//   //10번
//   else if (count.total === 9) {
//     //마지막으로 선택한 요소 담기
//     commitClickData(list, clickData, finalClick);
//     //blue, red 번갈아 진행
//     nextTurn(count);
//     //banpickData.color.ban에 데이터 담기
//     saveFinalData(CHAMPOBJ, "ban", finalClick);

//     //ban버튼 안보임 + pick버튼 보임
//     banBtn.classList.toggle("hidden");
//     pickBtn.classList.toggle("hidden");
//     alert("ban 완료했습니다");
//     //변수 초기화
//     resetCount(count);
//   }
// });

//pick버튼 클릭

//pick버튼 클릭
// pickBtn.addEventListener("click", () => {
//   //리스트 선택안하고 pick버튼 눌렀을 때
//   if (clickData.length === 0) {
//     // startTimer(banBtn);
//     alert("픽을 진행해주세요");
//     // return;
//   } else {
//     startTimer(banBtn);
//     //1-9번
//     if (count.total < 9) {
//       //마지막으로 선택한 요소 담기
//       commitClickData(list, clickData, finalClick);
//       //blue, red 번갈아 진행
//       nextTurn(count);
//     }
//     //10번
//     else if (count.total === 9) {
//       //마지막으로 선택한 요소 담기
//       commitClickData(list, clickData, finalClick);
//       //blue red 번갈아 진행
//       nextTurn(count);
//       //banpickData.color.pick에 데이터 담기
//       saveFinalData(CHAMPOBJ, "pick", finalClick);

//       //pick버튼 안보임
//       //다시하기 버튼 보임
//       pickBtn.classList.toggle("hidden");
//       restartBtn.classList.toggle("hidden");
//       alert("완료했습니다");

//       //console로 확인
//       console.log(CHAMPOBJ.banPickData);
//       console.log("last", finalClick);
//       //count에 사용한 변수 리셋
//       resetCount(count);

//       //20번 다 고르면 타이머 스탑
//       onTimerExpired();
//     }
//   }
// });

restartBtn.addEventListener("click", () => {
  //리스트 초기화
  location.reload();
});

//시작한다는 창에 확인 버튼 눌러야 시간초 시작
// alert("시작");
startTimer(banBtn, pickBtn);
