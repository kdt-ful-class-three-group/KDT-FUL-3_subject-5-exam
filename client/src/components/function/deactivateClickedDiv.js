/**
 * 선택한 리스트에 css 적용
 * @param {*} id 목록에서 id 속성 값
 * @param {*} list document.getElementById('list').children
 */
export function deactivateClickedDiv(id,list) {
  list.forEach(div => {
    if (div.getAttribute('id') === id) {
      div.style.pointerEvents = 'none';
      div.style.opacity = '0.5';
      div.style.color = 'red';
      const children = div.querySelectorAll('*');
      children.forEach(child => {
        child.style.pointerEvents = 'none';
        child.style.opacity = '0.5';
        child.style.color = 'red';

      })
    }
  });
}