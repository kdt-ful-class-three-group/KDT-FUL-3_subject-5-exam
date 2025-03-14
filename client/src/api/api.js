let data = function(){
    fetch("https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json")
        .then(response => response.json())
        .then(data => {
          // 객체로 된 데이터 value로 받아와서 data 객체로 진입
          let dataGet = Object.values(data.data)
          // 한글 이름 저장소
          let koreanData = [];
          dataGet.forEach((element) =>{
            // 한글 이름 순서대로 배열에 삽입
            koreanData.push(element.name);
          })
          console.log(koreanData);
          for(let i = 0 ; i < koreanData.length ; i++){
              let dataSet = document.createElement('p');
              dataSet.textContent = koreanData[i];
              document.body.appendChild(dataSet)
          }
        })
}

data();