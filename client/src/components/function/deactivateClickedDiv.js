/**
 * 선택한 리스트에 css 적용
 * @param {*} id 목록에서 id 속성 값
 * @param {*} list document.getElementById('list').children
 */
export function deactivateClickedDiv(id,list) {
  Array.from(list).forEach(div => {
    if (div.getAttribute('id') === id) {
      div.style.pointerEvents = 'none';
      div.style.color = 'red';


    }
  });
}