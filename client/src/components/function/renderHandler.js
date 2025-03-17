/**
 * 화면을 자동으로 갱신하는 함수
 * 이 함수는 특정 조건이나 이벤트가 발생했을 때 화면을 다시 렌더링합니다.
 * 
 * @param {*} obj 
 */
export function autoRender(obj) {
    for (const [key, value] of Object.entries(obj)) {
        const el = document.getElementById(key);
        if (el) {
            if (Array.isArray(value)) {
                el.innerHTML = value.join(', ');
            } else if (typeof value === 'object') {
                autoRender(value);
            } else {
                el.innerText = value;
            }
        }
    }
}