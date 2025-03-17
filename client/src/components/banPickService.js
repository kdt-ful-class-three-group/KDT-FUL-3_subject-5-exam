import { CHAMPOBJ } from "../obj/CHAMPOBJ_hyunjoon.js";

// 클릭 데이터 저장 객체
let count = {
  blue: 0,
  red: 0,
  get all() {
    return this.blue + this.red;
  },
  total: 0,
};

let clickData = [];
let finalClick = [];

// DOM 객체 가져오기
const blueBan = document.querySelectorAll("div#blue-ban > div");
const redBan = document.querySelectorAll("div#red-ban > div");
const bluePick = document.querySelectorAll("div#blue-pick > div");
const redPick = document.querySelectorAll("div#red-pick > div");
const list = document.getElementById("list").children;
const choiceBtn = document.getElementById("choice");

// 클릭 이벤트 함수
/**
 * 
 * @param {*} div 클릭한 div
 */
function divClick(div) {
  div.addEventListener("click", () => {
    clickData.push({ id: div.getAttribute("id"), name: div.getAttribute("name") });
    if (clickData.length > 1) {
      clickData.shift();
    }
    addBanList();
  });
}

// 밴 리스트 추가 함수
function addBanList() {
  if (clickData.length > 0) {
    if (count.all % 2 === 0) {
      blueBan[count.blue].textContent = clickData[0].name;
    } else {
      redBan[count.red].textContent = clickData[0].name;
    }
  }
}
// 픽 리스트 추가 함수
function addPickList() {
  if (clickData.length > 0) {
    if (count.all % 2 === 0) {
      bluePick[count.blue].textContent = clickData[0].name;
    } else {
      redPick[count.red].textContent = clickData[0].name;
    }
  }
}


// 선택 버튼 클릭 이벤트
function choiceBtnEvent() {
  if (count.total < 9) {
    pushBanData();
    turnChange();
  } else if (count.total === 9) {
    pushBanData();
    filterBan('ban');
  } else if (count.total > 10) {
    alert("11번째 입니다.");

    //!픽 하는 함수 추가해야함


  }
  console.log("최종 선택:", finalClick);
}

// 선택 데이터 처리 함수
function pushBanData() {
  if (clickData[0]) {
    finalClick.push(clickData[0]);
    noneChoice(clickData[0].id);
    clickData = [];
  } else {
    finalClick.push({ id: "ban", name: "ban" });
  }
}

// 선택한 챔피언 비활성화 함수
/**
 * 
 * @param {*} selectedId 선택한 챔피언의 id
 */
function noneChoice(selectedId) {
  Array.from(list).forEach((div) => {
    if (div.getAttribute("id") === selectedId) {
      div.style.pointerEvents = "none";
      div.style.color = "red";
    }
  });
}

// 턴 변경 함수
function turnChange() {
  if (count.total % 2 === 0) {
    count.blue++;
  } else {
    count.red++;
  }
  count.total++;
}

// 밴픽 완료 처리 함수
/**
 * 
 * @param {*} type ban, pick
 */
function filterBan(type) {
  if (type === 'ban') {
    CHAMPOBJ.banPickData.blue.ban = finalClick.filter((_, i) => i % 2 === 0);
    CHAMPOBJ.banPickData.red.ban = finalClick.filter((_, i) => i % 2 !== 0);
    console.log("최종 결과:", CHAMPOBJ.banPickData);
    alert("밴 완료했습니다");
  } else if(type === 'pick') {
    CHAMPOBJ.banPickData.blue.pick = finalClick.filter((_, i) => i % 2 === 0);
    CHAMPOBJ.banPickData.red.pick = finalClick.filter((_, i) => i % 2 !== 0);
    console.log("최종 결과:", CHAMPOBJ.banPickData);
    alert("픽 완료했습니다");
  }

}

// 이벤트 리스너 설정
Array.from(list).forEach(divClick);
choiceBtn.addEventListener("click", choiceBtnEvent);
