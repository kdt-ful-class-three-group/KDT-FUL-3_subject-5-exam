/**
 * clickData에 {id:영어이름, name: 한국이름} 으로 선택한 목록 넣기
 * @param {Element} div 중앙 챔피언 리스트
 * @param {Array} clickData 실시간 선택 데이터가 들어갈 배열
 */
export function divListClick(div, clickData){
  clickData.push({id : div.getAttribute('id'), name : div.getAttribute('name')})
  if(clickData.length>1){
    clickData.shift()
    console.log('click',clickData)
  }
}