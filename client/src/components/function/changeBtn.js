/**
 * 과정 진행 후 바뀌는 버튼 설정
 * @param {string} btnId 바꾸고 싶은 버튼의 id
 * @param {string} changeId 바꿀 id
 * @param {string} text 버튼의 textContent
 */
export function changeBtn(btnId, changeId,text){
  let btn = document.getElementById(btnId)
  btn.id = changeId;
  btn.textContent = text
}