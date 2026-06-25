// 함수 선언문
function showMessage() {
    document.querySelector('#messageResult').textContent = 'showMessage() 함수를 호출'

}
//예제 - div태그 클릭시 카운팅
function clickCount(btn) {
    const count = Number(btn.textContent);
    btn.textContent = count + 1;
}

// 매개변수와 반환값
// 예제 - 성적 구하기
function scoreSubjects() {
    const scoreKor = document.getElementById('scoreKor');
    const scoreEng = document.getElementById('scoreEng');
    const scoreMath = document.getElementById('scoreMath');

    const scoreTotal = document.getElementById('scoreTotal');
    const scoreAve = document.getElementById('scoreAve');
    const scoreUnit = document.getElementById('scoreUnit');


    const Kor = scoreKor.value.trim();
    const Eng = scoreEng.value.trim();
    const Math = scoreMath.value.trim();

    // 유효성 검사 및 점수 제한(0 ~ 100)
    if (Kor === '' || isNaN(Kor)) {
        scoreTotal.value = '숫자를 입력해 주세요.';
        return;
    } else if (Kor > 100 || Kor < 0) {
        scoreTotal.value = '0 ~ 100 사이만 입력 가능';
        return;
    }

    if (Eng === '' || isNaN(Eng)) {
        scoreAve.value = '숫자를 입력해 주세요.';
        return;
    } else if (Eng > 100 || Eng < 0) {
        scoreAve.value = '0 ~ 100 사이만 입력 가능';
        return;
    }

    if (Math === '' || isNaN(Math)) {
        scoreUnit.value = '숫자를 입력해 주세요.';
        return;
    } else if (Math > 100 || Math < 0) {
        scoreUnit.value = '0 ~ 100 사이만 입력 가능';
        return;
    }

    const total = Number(Kor) + Number(Eng) + Number(Math);
    scoreTotal.value = total;
    const ave = (total / 3).toFixed(1);
    scoreAve.value = ave;
    // const unit = (ave/20).toFixed(1); // 5점 기준으로 했음
    const unit = scoreUnitFn(ave);
    scoreUnit.value = unit;
}
// 학점은 점수 영역에서 알바벳으로 계산
function scoreUnitFn(ave) {
    switch (Math.floor(ave / 10)) {//Math.floor()소수점 버리기
        case 10:
        case 9:
            return "A";

        case 8:
            return "B";

        case 7:
            return "C";

        case 6:
            return "D";

        default:
            return "F";
    }

}
// 익명함수와 함수 표현식
const experssionButton = document.querySelector('#experssionButton');
const experssionResult = document.querySelector('#experssionResult');

const printExperssionMessage = function () {
    experssionResult.textContent = '익명 함수를 변수에 저장한 뒤 이벤트에서 호출'
};

experssionButton.addEventListener('click', printExperssionMessage);

//  예제 - 이름을 입력받아 인사말 출력
const greetingButton = document.querySelector('#greetingButton');
const greetingResult = document.querySelector('#greetingResult');

const makeGreeting = function (name) {
    return `${name}님, 자바스크립트 함수 표현식을 학습 중입니다.`
};

greetingButton.addEventListener('click', function () {
    const userName = document.querySelector('#userName').value.trim();
    if (userName.length === 0) {
        greetingResult.textContent = '이름을 입력하세요.';
        return;
    }
    greetingResult.textContent = makeGreeting(userName);
});

//  예제 - 점수을 입력받아 합격 여부 출력
const passedButton = document.querySelector('#passedButton');
const passedResult = document.querySelector('#passedResult');

const makePassed = function (score) {
    const passed = score >= 60 ? '합격' : '불합격';
    return passed
};

passedButton.addEventListener('click', function () {
    const userPassed = document.querySelector('#userPassed'); //출력값 object 타입으로나옴 
    const userPassedValue = userPassed.value.trim();//출력값 입력된값으로

    //유효성검사
    if (userPassedValue === '') {
        passedResult.textContent = '점수를 입력하세요.';
        return;
    }
    const score = Number(userPassedValue);

    if (isNaN(score)) {
        passedResult.textContent = '점수를 숫자로 입력하세요.';
        return;
    }

    const habgug = makePassed(score);
    passedResult.textContent = `점수 : ${userPassed}, 합격 여부 : ${habgug}`;
});



// 즉시 실행 함수
let immediateMessage = '';

(function() {
    const now = new Date();
    immediateMessage = `즉시 실행 함수가 ${now.toLocaleTimeString()}에 실행되었습니다.`;
    console.log(immediateMessage);
})();

function showImmediateResult() {
    document.querySelector('#immediateResult').textContent = immediateMessage;
}

// 화살표 함수
const arrowButton = document.querySelector('#arrowButton');
const thisButton = document.querySelector('#thisButton');
const arrowResult = document.querySelector('#arrowResult');

const multiply = (num1, num2) => num1 * num2;

arrowButton.addEventListener('click',() => {
    arrowResult.textContent = `화살표 함수 계산 결과 : 5 x 4 = ${multiply(5,4)}`;
});

// thisButton.addEventListener('click', function(event) {
//     this.style.backgroundColor = 'pink';
//     event.target.style.color = 'white';
//     arrowResult.textContent = '일반 함수에서 this는 이벤트가 발생한 요소를 가리킨다.';
// });


// =>는 this가 사용되지 않아 event.target으로 사용해야한다.
thisButton.addEventListener('click', event => {
    event.target.style.backgroundColor = 'pink';
    event.target.style.color = 'white';
    arrowResult.textContent = '일반 함수에서 this는 이벤트가 발생한 요소를 가리킨다.';
});

// 예제 - 점수 목록에서 합격 점수만 출력하기
const passScoreButton = document.querySelector('#passScoreButton');
const passScoreResult = document.querySelector('#passScoreResult');

passScoreButton.addEventListener('click',() => {
    const scores = [95, 52, 80, 45, 70];

    // filter() 안에서 화살표 함수 사용
    const passScores = scores.filter(score => score >= 60);
    passScoreResult.textContent = `해당 점수 중: [${scores}] ,합격 점수: ${passScores.join(', ')}`;
});


// 예제 - 입력한 글자 수 확인하기
const textInput = document.querySelector('#textInput');
const textBtn = document.querySelector('#textBtn');
const textResult = document.querySelector('#textResult');

const textValue = (event) => event.length;


textBtn.addEventListener('click',() => {
    const textInputValue = textInput.value.trim();
    console.log(textInputValue);
    //유효성검사 
    if (textInputValue.length === 0) {
        textResult.textContent = `점수를 입력하세요.`;
        return;
    }
   
    textResult.textContent = `입력하신 글자의 수: ${textValue(textInputValue)}`;
});


// 함수 활용 예제
const fontColor = document.querySelector('#fontColor');
const fontColorBtn = document.querySelector('#fontColorBtn');
const quote = document.querySelector('#quote');


fontColorBtn.addEventListener('click',() => {
    quote.style.color = fontColor.value;
});
// const redBtn = document.querySelector('#redBtn');
// const blueBtn = document.querySelector('#blueBtn');
// const colorResult = document.querySelector('#colorResult');


// redBtn.addEventListener('click',() => {
//     console.log("asd")
//     colorResult.style.color = redBtn.value;
// });

// blueBtn.addEventListener('click',() => {
//     colorResult.style.color = blueBtn.value;
// });


// 콜백 함수
const sum = function(num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
    return result;
}

const runCallback = document.querySelector('#runCallback');
const callbackResult = document.querySelector('#callbackResult');

runCallback.addEventListener('click',function() {
    sum(10, 20, function(result) {
        callbackResult.textContent = '콜백 함수 실행 결과: '+result;
    });
});

// 이벤트로 입력받는값 출력 - 30일 시험 이건 작업할걸 프로젝트파일로 압축하고 전달