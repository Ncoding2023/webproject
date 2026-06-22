// external 방식 예제
function showExternalMessage() {
    alert('외부 JS 파일에서 실행한 알림창입니다.')
}

// 이벤트 기반 처리 예제
function changeColor(params) {
    document.querySelector('#box').style.backgroundColor = params;
}

function resetColor() {
    document.querySelector('#box').style.backgroundColor = 'white';
}

// 명령형 방식과 선언형 방식 비교 예제
function showEvenNumbers() {
    const numbers = [1,2,3,4,5,6,7,8];

    // 명령형 방식: 처리 순서를 직접 작성한다.
    let evenNumbers1 = [];

    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers1.push(numbers[i]);
        }
    }
//  선언형 방식: 원하는 결과를 중심으로 작성한다.
    const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

    document.querySelector('#arrayResult').textContent =
    `명령형 결과: ${evenNumbers1.join(',')} / 선언형 결과: ${evenNumbers2.join(',')}`

    console.log('명령형 프로그래밍', evenNumbers1);
    console.log('선언형 프로그래밍', evenNumbers2);
}