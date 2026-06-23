function accessId() {
    const box = document.getElementById('box');

    const colors = ['red','orange','yellow','green','blue','purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    box.style.backgroundColor = randomColor;
    box.textContent = `현재 배경색: ${randomColor}`;
    
}

function accessClass() {
    const divList = document.getElementsByClassName('classBox');
    const colors = ['pink','tomato','skyblue'];
    const texts = ['첫 번째 요소','두 번째 요소','세 번째 요소'];

    for (let i = 0; i < divList.length; i++) {
        divList[i].style.backgroundColor = colors[i];
        divList[i].textContent = texts[i];
        
    }
    
}

function accessTagName() {
    const liList = document.getElementsByTagName('li');

    for (let i = 0; i < liList.length; i++) {
        const number = Number(liList[i].textContent);
        console.log(number);
        liList[i].style.backgroundColor = `rgb(120, 200, ${50 * number})`;
    }
    
}

function accessName() {
    const hobbyList = document.getElementsByName('hobby');
    const selected = [];

    for (let i = 0; i < hobbyList.length; i++) {
        if (hobbyList[i].checked) {
            selected.push(hobbyList[i].value);
        }
    }
    
    const result = document.getElementById('nameDiv');

    if (selected.length > 0) {
        result.innerHTML = `선택한 취미 : ${selected.join(',')}<br>선택된 개수: ${selected.length}`;
    } else {
        result.textContent = '선택된 항목이 없습니다.';
    }
}

function selectFirstMenu() {
    const firstMenu = document.querySelector('.menu-item');
    const selectorResult = document.querySelector('#selectorResult');

    firstMenu.style.backgroundColor = 'gold';
    firstMenu.style.fontWeight = 'bold';

    selectorResult.textContent = 'querySelector()는 조건에 맞는 첫번째 요소만 선택'
}

function selectAllMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    const selectorResult = document.querySelector('#selectorResult');

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.backgroundColor = 'lightblue';
        menuItems[i].style.fontWeight = 'bold';
    }

    selectorResult.textContent = 'querySelectorAll()는 조건에 맞는 모든 요소 선택'
}

// resetMenu()
function resetMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    const menuResult = document.querySelector('#selectorResult');

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.backgroundColor = '#fff';
        menuItems[i].style.fontWeight = 'nomal';
    }

    selectorResult.textContent = '결과가 이곳에 출력된다.'
}

// 예제1 버튼에 id추가함 
function showStudyMessage() {
    const buttonMessage = document.getElementById('buttonValue');
    const studyMessage = document.getElementById('studyMessage');

    console.log(buttonMessage);
        // studyMessage.value
    
        console.log(buttonMessage.value);
    studyMessage.textContent = `${buttonMessage.value}`;

}

function addMemo() {
    const memoInput = document.querySelector('#memoInput');
    const memoList = document.querySelector('#memoList');
    const memoText = memoInput.value.trim();

    if (memoText.length === 0) {
        memoInput.focus();
        return;
    }

    const emptyMessage = document.querySelector('.empty-message');

    if (emptyMessage !== null) {
        emptyMessage.remove;
    }
    memoList.innerHTML += `<p class="memo-item">${memoText}</p>`;
    memoInput.value = '';
    memoInput.focus();
}

function clearMemo() {
    const memoList = document.querySelector('#memoList');
    const memoInput = document.querySelector('#memoInput');
    
    memoList.innerHTML = '<p class="empty-message">작성한 메모가 이곳에 추가된다.</p>';
    memoInput.value = '';
    memoInput.focus();
}

function addMemoEnter() {
    if(event.key === 'Enter') {
        addMemo();
    }
}



function readValue() {
    const bg = document.querySelector('#chattingBg');
    const input = document.querySelector('#chattingInput');
    const message = input.value.trim();

    if (message.length === 0) {
        message.focus();
        return;
    }

    bg.innerHTML += `<p><span>${message}</span></p>`;
    bg.scrollTop = bg.scrollHeight;

    input.value = '';
    input.focus();
}

function inputEvent(event) {
    if(event.key === 'Enter') {
        readValue();
    }
}

function changeProfile() {
    const input1 = prompt('이름 입력:');
    const input2 = prompt('직업 입력:');
    const input3 = prompt('소개 문구 입력:');
    // const profileName = document.getElementsByClassName('profileName');
    // querySelector
    // getElementsByClassName
    // 이둘의 차이가 무언인가? getElementsByClassName이걸로는 동작이 안되네?
    const profileName = document.querySelector('.profileName');
    const profileJob = document.querySelector('.profileJob');
    const profileIntro = document.querySelector('.profileIntro');
    console.log(input1);
    console.log(profileName);

    profileName.textContent = `이름 :${input1}`;
    profileJob.textContent = `직업 :${input2}`;
    profileIntro.textContent = `소개 문구 :${input3}`;
}