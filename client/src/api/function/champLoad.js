import korNameGet from "./korNameGet.js";
import sortNameGet from "./sortNameGet.js";

// 챔피언 초상화, 스플래쉬 아트, 한글이름 불러오기
function champLoad(data) {
  // apiData = JSON구조 내에 data 객체 접근하여 values로 전부 배열로 만듬
  // champKorName =  원본에서 한글 이름을 가져옴
  // champCombine = [{korName : "가렌", engName : "Garen"}] 형식으로 저장한 배열
  let apiData = Object.values(data.data);
  let champKorName = [];
  let champCombine = [];

  // 원본 데이터에서 한글 가져옴
  champKorName = korNameGet(apiData);
  // 가나다로 정렬 후 [{korName : "가렌", engName : "Garen"}] 형식으로 저장
  champCombine = sortNameGet(champKorName, apiData);

  // 챔피언의 초상화, 챔피언의 스플래쉬 아트, 챔피언의 한글 이름을 처리
  for (let index = 0; index < apiData.length; index++) {
    // localstorge 사용 key : 챔피언 영어 이름 , value : 스플래쉬 아트 링크
    // example => key : Ahri, value : 스플래쉬 아트 링크
    localStorage.setItem(
      champCombine[index].engName,
      `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champCombine[index].engName}_0.jpg`
    );

    // <section id="list"></section>
    const section = document.getElementById("list");

    /*
      <div id='영어이름' name='한국이름'>
      <img> => 챔피언 초상화 표출
      <img> => 챔피언 스플래쉬 아트 표출
      <p></p> => 챔피언 한글이름 표출
      </div>
      */
    section.innerHTML += `<div id='${champCombine[index].engName}' name='${champCombine[index].korName}'class= "w-full cursor-pointer p-[15%] text-center">
          <img src = https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champCombine[index].engName}.png class= "w-full h-full object-fit">
          <p class="font-[14px] text-[#ffffff]">${champCombine[index].korName}</p></div>`;
  }
}
// <img src = https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champCombine[index].engName}_0.jpg>

export default champLoad;
