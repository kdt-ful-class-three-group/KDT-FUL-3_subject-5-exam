import { CHAMPOBJ } from "../../obj/CHAMPOBJ.js";
import { commitClickData } from "../function/commitClickData.js";
import { nextTurn } from "../function/nextTurn.js";
import { saveFinalData } from "../function/saveFinalData.js";
import { buttonChange } from "../function/buttonChange.js";
import { resetCount } from "../function/resetCount.js";
import { startTimer } from "../startTimer.js";




let count = CHAMPOBJ.count;

//중앙 챔피언 리스트 클릭할 때 사용하는 배열
let clickData = CHAMPOBJ.dataArray.clickData; //실시간으로 담기는 배열
let finalClick = CHAMPOBJ.dataArray.finalClick; //최종 배열

//div 요소
const ELEMENT = CHAMPOBJ.ELEMENT;

// ban버튼 클릭 이벤트 함수

export function banBtnEvent() {
  startTimer();
  //1-9번
  if (count.total < 9) {
    const currentTeamId = (count.total % 2 === 0) ? "blue" : "red";
    //마지막으로 선택한 요소 담기
    commitClickData(ELEMENT.list, clickData, finalClick, currentTeamId);

    //blue, red 번갈아 진행
    nextTurn(count);
  }
  //10번
  else if (count.total === 9) {

    const currentTeamId = (count.total % 2 === 0) ? "blue" : "red";
    //마지막으로 선택한 요소 담기
    commitClickData(ELEMENT.list, clickData, finalClick,currentTeamId);


    //blue, red 번갈아 진행
    nextTurn(count);
    //banpickData.color.ban에 데이터 담기
    saveFinalData(CHAMPOBJ, "ban", finalClick);



    finalClick.forEach(bans=>{
      console.log("서버에 보낼 데이터",bans)
      fetch('http://localhost:8004/api/bans',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          team_id: bans.team_id,
          champion_id:bans.id,
          champion_name:bans.name
        })
      })
          .then(res => res.json())
          .then(data =>{
            console.log("밴 데이터 저장성공",data);
      })
          .catch(err=>{
            console.error("밴 데이터 저장 실패",err);
          })

    })

    //ban버튼 안보임 + pick버튼 보임
    buttonChange(ELEMENT.banBtn, ELEMENT.pickBtn);
    alert("ban 완료했습니다");
    //변수 초기화
    resetCount(count, finalClick);
  }
};