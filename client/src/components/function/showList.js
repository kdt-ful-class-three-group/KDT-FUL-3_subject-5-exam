/**
 * 팀 리스트에 선택한 요소 보여주는 함수
 * @param {Object} count CHAMPOBJ.count
 * @param {Array} clickData 실시간 선택 요소
 * @param {Element} blueList blue팀 ban/pick 리스트
 * @param {Element} redList red팀 ban/pick 리스트
 */
export function showBanList(count,clickData, blueList, redList){
  if(count.all%2===0){
    blueList[count.blue].innerHTML = `<img src = 'https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${clickData[0].id}.png'>`
  } else {
    redList[count.red].innerHTML = `<img src = 'https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${clickData[0].id}.png'>`
  }
}

export function showPickList(count, clickData, bluePickList, redPickList){
  if(count.all%2===0){
    bluePickList[count.blue].innerHTML = `<img src = https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clickData[0].id}_0.jpg>`
  } else {
    redPickList[count.red].innerHTML = `<img src = https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clickData[0].id}_0.jpg>`
  }
}