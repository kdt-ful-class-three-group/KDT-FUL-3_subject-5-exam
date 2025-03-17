/**
 * 선택한 리스트에 css 적용
 * @param {*} id 목록에서 id 속성 값
 * @param {*} list document.getElementById('list').children
 */
export function deactivateClickedDiv(id,list) {
  Array.from(list).forEach(div => {
    if (div.getAttribute('id') === id) {
      const children = div.querySelectorAll('*');
      children.forEach(child => {
        child.style.pointerEvents = 'none';
        child.style.opacity = '0.5';
      
      })
    }
  });
}