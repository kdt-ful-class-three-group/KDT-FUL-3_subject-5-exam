/**
 * 팀 리스트에 선택한 요소 보여주는 함수
 * @param {Object} count CHAMPOBJ.count
 * @param {Array} clickData 실시간 선택 요소
 * @param {Element} blueList blue팀 ban 리스트
 * @param {Element} redList red팀 ban 리스트
 */

function showBanList(count, clickData, blueList, redList) {
  // const imgStyle ="width: 50px; height: 50px; display:inline-block; justify-content:row; "
  if (count.all % 2 === 0) {
    blueList.querySelectorAll("img")[
      count.blue
    ].src = `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${clickData[0].id}.png`;
  } else {
    redList.querySelectorAll("img")[
      count.red
    ].src = `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${clickData[0].id}.png`;
  }
}
/**
 * 팀 리스트에 선택한 요소 보여주는 함수
 * @param {Object} count CHAMPOBJ.count
 * @param {Array} clickData 실시간 선택 요소
 * @param {Element} blueList blue팀 pick 리스트
 * @param {Element} redList red팀 pick 리스트
 */
export function showPickList(count, clickData, bluePickList, redPickList) {
  const pickList = count.all % 2 === 0 ? bluePickList : redPickList;
  const index = count.all % 2 === 0 ? count.blue : count.red;
  const imgElement = pickList[index];

  imgElement.style.opacity = 0; // 초기 투명도 0
  imgElement.style.transition = 'opacity 0.5s ease-in-out'; // 트랜지션 설정

  const img = new Image();
  img.onload = () => {
    imgElement.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clickData[0].id}_0.jpg')`;
    imgElement.style.backgroundSize = "cover";
    imgElement.style.backgroundPosition = "center top";
    imgElement.style.opacity = 1; // 로딩 완료 후 투명도 1로 변경
  };
  img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clickData[0].id}_0.jpg`;
}

/**
 * 
 * @param {Object} count 카운트 변수가 담긴 객체
 * @param {Array} clickData 실시간 선택 요소가 담기는 배열
 * @param {Element} ELEMENT 선택 요소를 보여줄 ELEMENT
 */
export function showList(count, clickData, ELEMENT) {
  if (!ELEMENT.banBtn.classList.contains("hidden")) {
    //각 팀 ban리스트 보여주기
    showBanList(count, clickData, ELEMENT.blueDiv, ELEMENT.redDiv);
  } else {
    showPickList(count, clickData, ELEMENT.bluePickDiv, ELEMENT.redPickDiv);
  }
}
