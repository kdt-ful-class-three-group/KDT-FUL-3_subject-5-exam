/**
 * 다음에 실행될 버튼으로 바꾸는 함수
 * @param {Element} existButton 현재 보이는 버튼
 * @param {Element} nextButton 다음에 보여줄 버튼
 */
export function buttonChange(existButton, nextButton) {
  existButton.classList.toggle("hidden");
  nextButton.classList.toggle("hidden");
}