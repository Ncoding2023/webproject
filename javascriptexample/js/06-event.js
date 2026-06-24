function inlineEventTest(button) {
    button.style.backgroundColor = 'pink';
    button.style.color = 'white';
    document.querySelector('#inlineResult').textContent = '인라인 이벤트 모델로 버튼 클릭';
}