
function showAlert() {
    alert('alert() 메서드로 출력한 알림창입니다.');
}

function showConsole() {
    const names = ['홍길동','김철수','이희진'];

    console.log('일반 메시지 출력', names);
    console.table(names);
    console.warn('경고 메시지 예시');
    console.error('에러 메시지 예시');

    document.querySelector('#consoleResult').textContent =
    '콘솔 출력은 브라우저 개발자도구의 콘솔탭에서 확인'
}

function documentWriteExample() {
    document.write('<h1>document.write() 실행 결과</h1>');
    document.write('<p>문서 로딩이 끝난 뒤 document.write()를 실행하면 기존 화면이 지워질 수 있다.</p>');
    document.write('<button onclick="location.reload()">원래 화면으로 돌아가기</button>');
}

function getTextContent() {
    const textSample = document.querySelector('#textSample');
    document.querySelector('#textResult').textContent = textSample.textContent;
}

function setTextContent() {
    document.querySelector('#textSample').textContent = 'textContent로 <strong>변경한 내용</strong>입니다.';
}

function getInnerHTML() {
    const textSample = document.querySelector('#textSample');
    document.querySelector('#htmlResult').textContent = htmlSample.textContent;
}

function setInnerHTML() {
    document.querySelector('#htmlSample').innerHTML = 'textContent로 <strong>변경한 내용</strong>입니다.';
}
function printTitle() {
    const title = document.querySelector('#titleResult');

    title.innerHTML = 'Hello, JavaScript!'
    title.style.color = 'orange';
    title.style.border = '1px solid #000';
    title.style.borderRadius = '10px';
    title.style.padding = '#555';
    title.style.width = 'fit-content';
}

function confirmColor() {
    const confirmButton = document.querySelector('#confirmButton');

    if (confirm('버튼 배경색을 오렌지색으로 바꾸시겠습니까?')) {
        confirmButton.style.backgroundColor = 'orange';
        confirmButton.textContent ='확인을 선택했습니다.'
    } else {
        confirmButton.style.backgroundColor = 'green';
        confirmButton.textContent ='취소을 선택했습니다.'
    }
}

function promptUserInfo() {
    const name = prompt('이름 입력:', '홍길동');
    const age = prompt('나이 입력:', '30');
    const result = document.querySelector('#promptResult1');

    if (name !== null && name.trim !== '' && age.trim() !== '') {
        result.innerHTML = `<strong>${age}살 ${name}님, 반갑습니다. </strong>`;
    } else {
        result.textContent = '이름과 나이를 모두 입력해야 결과 출력'
    }
}
function promptName() {
     const input = prompt('Name 입력:');
    const result = document.querySelector('#promptResult2');

    if (name !== null && name.trim !== '') {
        result.textContent = `${input}님 환영합니다.`;
    } else {
        result.textContent = '이름과 나이를 모두 입력해야 결과 출력'
    }
}

function printInputValue() {
    const idInput = document.querySelector('#userId');
    const pwInput = document.querySelector('#userPw');
    const result = document.querySelector('#inputResult');

    const id = idInput.value.trim();
    const pw = pwInput.value.trim();
    if (id.trim !== '' && pw.trim() !== '') {
        result.value = `${id}, ${pw}`;
    } else {
        result.value = 'id,pw를 다시 확인해주세요.'
    }

    idInput.value = '';
    pwInput.value = '';
    idInput.focus();
}

// 예제1
function showStudyMassage() {
    document.querySelector('#studyMassage').textContent = 'study: innerHTML textContent';
}

function showNotice() {
    document.querySelector('#noticeArea').innerHTML = ` <h3>수업 공지사항</h2>
            <ul>
                <li>실습 파일을 먼저 실행</li>
                <li>버튼을 클릭한 후 화면 변화를 확인해 주세요.</li>
                <li>textContent와 innerHTML의 차이를 비교해 주세요.</li>
            </ul>`;
}

const templateButton = document.querySelector('#templateButton');
const templateResult = document.querySelector('#templateResult');

templateButton.addEventListener('click',function() {
    const myName = '홍길동';
    const age = 25;
    const height= 178.5;

    templateResult.innerHTML = `
        <p><strong>문자열 연결 방식</strong></p>
        <p>My name is ${myName}, My age is ${age}, My height is ${height}</p>

        <p><strong>템플릿 문자열 방식</strong></p>
        <p>My name is ${myName}, My age is ${age}, My height is ${height}</p>

        <p><strong>여러 줄 템플릿 문자열</strong></p>
        <p>
            My name is ${myName} <br>
            My age is ${age} <br>
            My height is ${height}</p>
        `;

});

// 예제3
function changInputValue() {
    const number1 = document.querySelector('#number1');
    const number2 = document.querySelector('#number2');
    
        const num1 = number1.value.trim();
    const num2 = number2.value.trim();
    if (num1.trim !== '' && num2.trim() !== '') {

        number1.value = `${num2}`;
        number2.value = `${num1}`;
    } else {
        number1.value = 'id,pw를 다시 확인해주세요.'
        number2.value = 'id,pw를 다시 확인해주세요.'
    }

    // idInput.value = '';
    // pwInput.value = '';
    // idInput.focus();
}
