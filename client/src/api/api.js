

// 챔피언 초상화, 스플래쉬 아트, 한글이름 불러오기
function champLoad(data) {
  // apiData = JSON구조 내에 data 객체 접근하여 values로 전부 배열로 만듬
  // sortedName = 한글이름 가, 나, 다 순으로 이름 정렬 
  // champPotrait = 챔피언 초상화 -> Aatrox.png
  // champSplash = 챔피언 스플래쉬 아트 이름 -> Aatrox_0.jpg
  // champKorName = 챔피언의 한글 이름 -> 아트록스
  let apiData = Object.values(data.data)
  let champPotrait = [];
  let champSplash = [];
  let champKorName = [];
  let champCombine = [];

  // 원본 데이터 한글 이름 
  for(let index = 0; index < apiData.length ; index++){
    champKorName.push(apiData[index].name)
  }

  // 챔피언 영어, 한글 이름
    for(let index = 0 ; index < apiData.length ; index++){
      
      for(let j = 0 ; j < apiData.length ; j++){
        if(champKorName.sort()[index] === apiData[j].name){
          champCombine.push({korName : apiData[j].name, engName : apiData[j].id});
        }  
      }
    }


  console.log(champCombine);
  //* console.log(apiData[0].image.full) -> 초상화 이미지의 이름 확인 "Aatrox.png"

  /* JSON 챔피언 특성 파일 구조
    data : {
      Aatrox : {
        name : 아트록스
      }
    }  
  }
 
    data 내에 각 챔피언 마다 Object를 가져옴
    
      상세 구조

      0 = {id : 'Aatrox' , name : "아트록스", img : { full : "Aatrox.png"}},
      1 = {id : 'Ahri' , name : "아리", img : {full : "Ahri.png"}},
  */

  // 챔피언의 초상화, 챔피언의 스플래쉬 아트, 챔피언의 한글 이름을 처리
  for (let index = 0; index < apiData.length; index++) {
    // champPotrait.push(apiData[index].image.full)
    // champSplash.push(apiData[index].id)

    // localstorge key : 챔피언 이름 , value : 스플래쉬 아트 링크
    localStorage.setItem(champSplash[index], `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champSplash[index]}_0.jpg`)

    /*
    <div>
    <img> => 챔피언 초상화 표출
    <img> => 챔피언 스플래쉬 아트 표출
    <p></p> => 챔피언 한글이름 표출
    </div>
    */
    const ul = document.getElementById('champList');

    ul.innerHTML += `<div>
        <img src = https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champCombine[index].engName}.png>
        <img src = https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champCombine[index].engName}_0.jpg>
        <p>${champKorName[index]}</p></div>`
  }
  console.log(apiData[0].name);

  console.log(champCombine)
}



// API 처리 함수
function dataHandle() {
  const xhr = new XMLHttpRequest();
  // 챔피언 특성이 담긴 JSON 한글 버전
  xhr.open("GET", 'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json');
  xhr.send();
  xhr.addEventListener('load', () => {
    if (xhr.status === 200); {
      let data = JSON.parse(xhr.responseText);

      // 챔피언 초상화, 스플래쉬 아트, 한글이름 불러오기
      champLoad(data)

    }
  });
}

// API 처리 함수 시작
dataHandle();