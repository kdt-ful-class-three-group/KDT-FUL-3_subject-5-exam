// 챔피언 초상화, 스플래쉬 아트, 한글이름 불러오기
function champLoad(data) {
  const championData = data.data;
  // {Aatrox :{name : "아트록스", id : "Aatrox"}}
  // console.log(championData)
  // [Aatrox, Ahri, ....]
  // console.log(Object.keys(championData))

  // 영어 이름으로 되어있는 [Aatrox, Ahri, ...] 에서 map으로 배열 진입
  let championDataArray = Object.keys(championData).map((index) => {
    // 결과 : 아트록스, championData[Aatrox].name
    // console.log(championData[index].name)
    // 결과 : Aatrox, [Aatrox, Ahri, ....]
    // console.log(index)

    // 객체로 넣어주기
    // {korName : 아트록스 , engName : Aatrox}
    return { korName: championData[index].name, engName: index };
  });

  // map 메서드 사용 한 후
  // [{korName : "아트록스", engName : "Aatrox"}, ...] 확인
  // console.log(championDataArray);

  // localeCompare를 사용한 배열 내에서 정렬이 가능 -> 공식 문서 참조
  // 한국어 기준으로 정렬 할 것이기 때문에 a의 korName 순서와 b의 korName 순서를 확인하여 정렬. 설정 언어는 "kr"
  championDataArray.sort((a, b) => a.korName.localeCompare(b.korName, "kr"));

  // Array 내에서 정렬 완료
  // [0] = [{korName : "가렌", engName : "Garen"}, [1] = {korName : "갈리오", engName : "Galio"}
  // console.log(championDataArray)

  // 챔피언 리스트를 담을 변수 선언
  let championListHTML = "";

  championDataArray.forEach((element) => {
    // 챔피언 한글이름 전체 출력
    // console.log(element.korName);
    // 챔피언 영어이름 전체 출력
    // console.log(element.engName);

    // key : Garen , value : .../splash/Garen_0.jpg
    // 모든 챔피언 로컬스토리지 저장
    // localStorage.setItem(
    //   element.engName,
    //   `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${element.engName}_0.jpg`
    // );

    // HTML 문자열을 누적
    championListHTML += `
    <div id='${element.engName}' name='${element.korName}' class="w-full cursor-pointer p-[20px] text-center">
      <img src="https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${element.engName}.png" class="w-full h-full object-fit">
      <p class="font-[14px] text-[#ffffff]">${element.korName}</p>
    </div>
    `;
  });

  // 챔피언 리스트를 한 번에 렌더링
  const section = document.getElementById("list");
  section.innerHTML = championListHTML;
}

// 챔피언 리스트가 렌더링된 후에 이벤트 작동
//   championDataArray.forEach((element) => {
//     const championElement = document.getElementById(element.engName);
//     if (championElement) {
//       championElement.addEventListener("click", () => {
//         // 이벤트 핸들러 코드 작성
//         console.log(`${element.korName} clicked`);
//       });
//     }
//   });
// }
// <img src = https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champCombine[index].engName}_0.jpg>

export default champLoad;

// for (let index = 0; index < apiData.length; index++) {
//   // localstorge 사용 key : 챔피언 영어 이름 , value : 스플래쉬 아트 링크
//   // example => key : Ahri, value : 스플래쉬 아트 링크
//   localStorage.setItem(
//     champCombine[index].engName,
//     `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champCombine[index].engName}_0.jpg`
//   );

//   // <section id="list"></section>
//   const section = document.getElementById("list");

//   /*
//   <div id='영어이름' name='한국이름'>
//   <img> => 챔피언 초상화 표출
//   <img> => 챔피언 스플래쉬 아트 표출
//   <p></p> => 챔피언 한글이름 표출
//   </div>
//   */
//   section.innerHTML += `<div id='${champCombine[index].engName}' name='${champCombine[index].korName}'class= "w-full cursor-pointer p-[20px] text-center">
//       <img src = https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champCombine[index].engName}.png class= "w-full h-full object-fit">
//       <p class="font-[14px] text-[#ffffff]">${champCombine[index].korName}</p></div>`;
// }
// <img src = https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champCombine[index].engName}_0.jpg>
