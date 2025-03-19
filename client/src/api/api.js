import champLoad from "./function/champLoad.js";

/* JSON 챔피언 특성 파일 구조
    data : {
      {id : Aatrox
        name : 아트록스
      }
    }
 
    data 내에 각 챔피언 마다 Object를 가져옴
    
      상세 구조

      0 = {id : 'Aatrox' , name : "아트록스", img : { full : "Aatrox.png"}},
      1 = {id : 'Ahri' , name : "아리", img : {full : "Ahri.png"}},
  */

// API 처리 함수
async function dataHandle() {
  const xhr = new XMLHttpRequest();
  // 챔피언 특성이 담긴 JSON 한글 버전
  xhr.open(
    "GET",
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  xhr.send();
  xhr.addEventListener("load", () => {
    if (xhr.status === 200);
    {
      let data = JSON.parse(xhr.responseText);

      // 챔피언 초상화, 스플래쉬 아트, 한글이름 불러오기
      champLoad(data);
    }
  });
  // alert("시작");
}
dataHandle();
