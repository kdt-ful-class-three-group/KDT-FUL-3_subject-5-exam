let championData = [];

function dataHandle() {
const xhr = new XMLHttpRequest();
// console.dir(xhr);
xhr.open("GET", 'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json');
xhr.send();
xhr.addEventListener('load', () => {
  if(xhr.status === 200);{
  let data = JSON.parse(xhr.responseText);
  
  // 
  let apiData = Object.values(data.data)
  console.log(Object.keys(data.data));
  // apiData에서 img 이름 가져오기 위함  
  let apiImg = [];
  let apiSplash =[]
  for(let i = 0 ; i < apiData.length ; i++){
    apiImg.push(apiData[i].image)
    apiSplash.push(Object.keys(data.data)[i])
  }
  
  console.log(apiData[0].image)

  apiData.forEach((element, index) => {
    let championName = element.name
    championData.push(championName);
    const ul = document.getElementById('champList');
    ul.innerHTML+=`<div>
    <img src = https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${apiImg[index].full}>
    <img src = https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${apiSplash[index]}_0.jpg>
    <p>${championData[index]}</p></div>`
  });
}

}

);

console.log(championData);
}
dataHandle();