let championData = [];
function dataHandle() {
const xhr = new XMLHttpRequest();
// console.dir(xhr);
xhr.open("GET", 'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json');
xhr.send();
xhr.addEventListener('load', () => {
  if(xhr.status === 200);{
  let data = JSON.parse(xhr.responseText);
  // console.dir(data);
  // console.log(Object.values(data.data));
  let apiData = Object.values(data.data)
  apiData.forEach((element, i) => {
    // console.log(element.name);
    let championName = element.name
    championData.push(championName);
    const ul = document.getElementById('champList');
    ul.innerHTML+=`<li>${championData[i]}</li>`
    // console.log(championName);
  });
  // console.log(xhr.responseText);
}
// const rootDiv = document.getElementById('root'); // HTML에 id가 root인 div가 있어야 합니다.
// console.log(root);
// championData.forEach((element, i) => {
// });
// const ul = document.createElement('ul');
// ul.appendChild(root);
    // rootDiv.innerHTML = championData.join('<br>'); // 챔피언 이름을 줄바꿈으로 표시



    // championData.forEach((element) => {
    //   const li = document.createElement('li')
    
    //   li.textContent = element
    
    
    //   li.appendChild(ul);
    // });
}

);

console.log(championData);
}
dataHandle();

// championData.forEach((element) => {
//   const li = document.createElement('li')

//   li.textContent = element


//   li.appendChild(ul);
// });