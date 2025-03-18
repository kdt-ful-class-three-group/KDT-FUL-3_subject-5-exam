// 정렬한 이름 가져오기
function sortNameGet(champKorName, apiData) {
    let champCombine = [];
  
    // 챔피언 영어, 한글 이름
    for (let outerIndex = 0; outerIndex < apiData.length; outerIndex++) {
      for (let innerIndex = 0; innerIndex < apiData.length; innerIndex++) {
        // 가, 나, 다 정렬된 한글이름과 API의 한글 이름과 같으면 실행
        if (champKorName.sort()[outerIndex] === apiData[innerIndex].name) {
          // 한글 이름과 영어 이름을 객체로 삽입 name : 한글이름, id : 영어 이름
          champCombine.push({
            korName: apiData[innerIndex].name,
            engName: apiData[innerIndex].id,
          });
        }
      }
    }
    return champCombine;
  }
  
  // 원본 API에서 한글 이름 가져오기
  function korNameGet(apiData) {
    let champKorName = [];
    // 원본 데이터에서 한글 이름을 가져옴
    for (let index = 0; index < apiData.length; index++) {
      champKorName.push(apiData[index].name);
    }
    console.log(champKorName);
    return champKorName;
  }


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
      section.innerHTML += `<div id='${champCombine[index].engName}' name='${champCombine[index].korName}'class= "w-full cursor-pointer p-[20px] text-center">
          <img src = https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champCombine[index].engName}.png class= "w-full h-full object-fit">
          <p class="font-[14px] text-[#ffffff]">${champCombine[index].korName}</p></div>`;
    }
  }
  // <img src = https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champCombine[index].engName}_0.jpg>
  
  export default champLoad