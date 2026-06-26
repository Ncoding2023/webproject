// 인라인 이벤트 모델
function inlineEventTest(button) {
    button.style.backgroundColor = 'pink';
    button.style.color = 'white';
    document.querySelector('#inlineResult').textContent = '인라인 이벤트 모델로 버튼 클릭';
}
// h1~h6 태그로 Hello JavaScript를 출력
function printHeadingTags() {
    const headingResult = document.querySelector('#headingResult');

    headingResult.innerHTML = "";
    for (let i = 1; i < 6; i++) {
        headingResult.innerHTML += `<h${i}>Hello JavaScript</h${i}>`;
    }
}

//고전 이벤트 모델
const classicButton = document.querySelector('#classicButton');
const removeClassicButton = document.querySelector('#removeClassicButton');
const classicResult = document.querySelector('#classicResult');

classicButton.onclick = function () {
    classicResult.textContent = '고전 이벤트 모델로 이벤트를 처리하였다.'
    classicResult.style.color = 'blue';
};

removeClassicButton.onclick = function () {
    classicButton.onclick = null;
    classicResult.textContent = 'classicButton의 onclick 이벤트를 제거하였다.'
    classicResult.style.color = '#222';
};

//표준 이벤트 모델
const standardButton = document.querySelector('#standardButton');
const standardBox = document.querySelector('#standardBox');

standardButton.addEventListener('click', function () {
    standardBox.textContent += '졸려';//첫 번째 이벤트 핸들러가 실행
});

standardButton.addEventListener('click', function () {
    standardBox.style.width = `${standardBox.clientWidth + 20}px`;
    standardBox.style.height = `${standardBox.clientHeight + 10}px`;
});




// 3.6.5 이벤트 객체
const colorButtons = document.querySelectorAll('.color-button');
const colorResult = document.querySelector('#colorResult');

colorButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const color = event.target.dataset.color;
        colorResult.style.backgroundColor = color;
        colorResult.textContent = `event.target으로 클릭한 버튼의 색상값 ${color}을 가져왔다.`;
    });
});



// 3.6.6 이벤트 예제
//예제 - div태그 클릭시 카운팅
const count = document.querySelector('#count');
const btn = document.querySelector('#btn');

btn.style.backgroundColor = 'pink';//이건되고
// console.log('unClick : ', isNaN(countValue));
// 이거때문에 안된거 였네 ㅅㅂ

btn.addEventListener('click', function (event) {
    const countValue = Number(count.textContent);


    if (isNaN(countValue)) {
        return;
    }
    count.textContent = countValue + 1;
});

// 예제 - 이미지 번갈아 보기
const changeImg = document.querySelector('#changeImg');
// 너무커
changeImg.style.width = '25%';
changeImg.style.height = '25%';

const changeImgBtn = document.querySelector('#changeImgBtn');
const changeImgResult = document.querySelector('#changeImgResult');
changeImgBtn.addEventListener('click', function (event) {
    const changeImgResultText = changeImgResult.textContent;
    
    if (changeImgResultText === '') {
        return;
    }
    
    const changeImgSrc = changeImg.src;
    const catImg = '../image/cat.png';
    const dogImg = '../image/dog.png';
    // changeImgSrc 안에는 실제 이미지 경로가 브라우저가 해석해서 만들어낸 절대 URL로 들어가 있어.
    // http://네사이트주소/image/cat.png

    // 근데 catImg는 그냥 내가 직접 쓴 상대 경로 '../image/cat.png'라서 딱 맞게 비교가 안 되는 거야.
    // 그니까 이 둘은 문자가 완전 달라서 true가 안 나오고 계속 false가 뜨는 거지!

    // 해결방법은?
    // changeImgSrc에 있는 경로의 **끝부분(파일명)**만 비교하는 게 좋아!
    changeImg.src = changeImgSrc.includes('cat.png') ? dogImg : catImg;
    // if (changeImgSrc.includes('cat.png')) { 그냥 내가 잘 못 쓴 거네
    //     changeImg.src = dogImg;
    // } else {
    //     changeImg.src = catImg;
    // }

    changeImgResult.textContent = changeImgResultText === '현재 이미지는 고양이입니다.' ? '현재 이미지는 강아지입니다.' : '현재 이미지는 고양이입니다.';
});



// 실행 예제 - 실시간 글자 수 세기(이벤트:input) 이건 5번거랑 이겨 아래 문제랑 혼합하면 될듯 
// 하단 참고용 코드
// const textInput = document.querySelector('#textInput');
// const textBtn = document.querySelector('#textBtn');
// const textResult = document.querySelector('#textResult');

// const textValue = (event) => event.length;


// textBtn.addEventListener('click',() => {
//     const textInputValue = textInput.value.trim();
//     //유효성검사 
//     if (textInputValue.length === 0) {
//         textResult.textContent = `점수를 입력하세요.`;
//         return;
//     }

//     textResult.textContent = `입력하신 글자의 수: ${textValue(textInputValue)}`;
// });

// 실행 예제 - 카드 뒤집기(이벤트: mouseover, mouseout) - 아니 이거 함수 물어볼려고만 질문했는데. ai 딸깍은 진짜 어지럽네
const nonsenseCard = document.getElementById('nonsenseCard');
const nonsenseResult = document.getElementById('nonsenseResult');

nonsenseCard.addEventListener('mouseover', () => {
    nonsenseCard.style.backgroundColor = '#f39c12'; // 노란색으로 변경
    nonsenseCard.textContent = '정답 : 꿈을 갖기 위해서';
    nonsenseResult.textContent = 'mouseover실행';
});

nonsenseCard.addEventListener('mouseout', () => {
    nonsenseCard.style.backgroundColor = 'lightblue'; // 원래 색으로 복구
    nonsenseCard.textContent = '우리 수업시간에 자는 이유는?';
    nonsenseResult.textContent = '카드에 마우스를 올려 보세요.';
});

// 예제 - 테마 선택하기
const themeSelect = document.querySelector('#themeSelect');
const themeSelectResult = document.querySelector('#themeSelectResult');
console.log(themeSelect);
// console.log(themeSelectResult.textContent);
// themeSelectResult.style.fontColor = "blcak";
themeSelect.addEventListener('change', function (event) {
    console.log(themeSelect.value);
    themeSelectResult.style.backgroundColor = themeSelect.value;
    themeSelectResult.style.fontColor = themeSelect.value === "black" ? "white" : "black";


});



// /입력 이벤트와 기본 이벤트 제거
const textInput = document.querySelector('#textInput');
const inputResult = document.querySelector('#inputResult');

textInput.addEventListener('input', function (event) {
    inputResult.textContent = event.target.value !== '' ? `입력 중: ${event.target.value}` : '입력한 내용이 이곳에 표시';
});


const joinForm = document.querySelector('#joinForm');
const userName = document.querySelector('#userName');
const formResult = document.querySelector('#formResult');

joinForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = userName.value.trim();
    formResult.textContent = name !== '' ? `${name}님, 폼 제출 이벤트 표시` : '이름 입력 필요';
    userName.focus(); //하단에 작은 창으로 정보표시
});

const goNaver = document.querySelector('#goNaver');

goNaver.addEventListener('click', function (event) {
    event.preventDefault();
    alert('preventDefault()로 링크의 기본 이동 방지')
}); 