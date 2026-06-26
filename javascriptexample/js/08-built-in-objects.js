/// String 객체</h2>
// 예제 - 이메일 주소 분석하기
const emailInput = document.getElementById('emailInput');
const emailButton = document.getElementById('emailButton');
const emailResult = document.getElementById('emailResult');

emailButton.addEventListener('click', function () {
    const email = emailInput.value.trim().toLowerCase();

    if (email === '') {
        alert('이메일 주소를 입력하세요.');
        emailInput.focus();
        return;
    }
    if (email.indexOf('@') === -1) {
        emailResult.textContent = '이메일 주소에는 @가 포함되머야 합니다.';
        emailInput.focus();
        return;
    }
    const emailParts = email.split('@');
    const userId = emailParts[0];
    const domain = emailParts[1];

    emailResult.innerHTML = `
        <p class="result-title"> 이메일 분석 결과</p>
    <p class="result-info"><strong>정리된 이메일 :</strong> ${email}</p>
    <p class="result-info"><strong>아이디 :</strong> ${userId}</p>
    <p class="result-info"><strong>도메인 :</strong> ${domain}</p>
    <p class="result-info"><strong>전체 길이 :</strong> ${email.length}</p>
    `;
});
//실행 예제 - 휴대폰 번호 가운데 자리 숨기기</p>
const phoneInput = document.getElementById('phoneInput');
const phoneButton = document.getElementById('phoneButton');
const phoneResult = document.getElementById('phoneResult');

phoneButton.addEventListener('click', function () {
    const phone = phoneInput.value.trim();
    if (phone.length !== 11) {
        alert('전화면호 주소를 입력하세요.');
        phoneInput.focus();
        return;
    }
    // if (phone === '') {
    //     alert('전화면호 주소를 입력하세요.');
    //     phoneInput.focus();
    //     return;
    // }

    const phoneParts = phone.substring(0, 3) + "****" + phone.substring(7);
    const phonePartsBak = phone.substring(0, 7) + "****";

    phoneResult.innerHTML = `
        <p class="result-title"> 번호 마킹 분석 결과</p>
    <p class="result-info"><strong>입력하신 번호 :</strong> ${phone}</p>
    <p class="result-info"><strong>마킹된 번호 :</strong> ${phoneParts}</p>
    <p class="result-info"><strong>마킹된 번호뒷자리 :</strong> ${phonePartsBak}</p>
    `;
});

// 3.8.3 Date 객체</h2>
const reservationDate = document.getElementById("reservationDate");
const reservationButton = document.getElementById("reservationButton");
const reservationResult = document.getElementById("reservationResult");

reservationButton.addEventListener("click", function () {
    const selectedValue = reservationDate.value;

    if (selectedValue === "") {
        alert("예약 날짜를 선택하세요.");
        reservationDate.focus();
        return;
    }

    const reserveDate = new Date(selectedValue);
    const receiveDate = new Date(reserveDate);

    receiveDate.setDate(reserveDate.getDate() + 7);

    reservationResult.innerHTML = `
        <p><strong>예약일 :</strong> ${formatDate(reserveDate)}</p>
        <p><strong>수령일 :</strong> ${formatDate(receiveDate)}</p>
    `
        ;

    /**
     
     
    reservationResult. innerHTML = `
        <p><strong>예약일 :</strong> ${reserveDate.toLocaleDateString()}</p>
        <p><strong>수령일 :</strong> ${receiveDate.toLocaleDateString()}</p>
    `;*/

    // toLocaleDateString() : 날짜 정보(예: 2026. 6. 25.)를 문자열로 반환한다.
    // toLocaleTimeString() : 시간 정보(예: 오후 3:30:10)를 문자열로 반환한다.
    // toLocaleString(): 날짜와 시간 정보(예: 2026. 6. 25. 오후 3:30:10)를 문자열로 반환한다.
});

function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
}

// Math 객체 - 오늘의 학습 주제 랜덤 추천
const studyTopics = ['String 객체', 'Date 객체', 'Math 객체', 'Array 객체', 'DOM 요소 접근', '이벤트 처리'];

const topicButton = document.getElementById('topicButton');
const topicResult = document.getElementById('topicResult');

topicButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * studyTopics.length);
    const selectedTopic = studyTopics[randomIndex];

    topicResult.innerHTML = `
<p class="topic-result">오늘의 추천 주제: ${selectedTopic}</p>
<p>랜덤 인덱스 번호: ${randomIndex}</p>
`;

});


// 실행 예제 - 좌석 번호 랜덤 배정
const seatButton = document.getElementById('seatButton');
const seatResult = document.getElementById('seatResult');

seatButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * 30);

    seatResult.innerHTML = `
        <p>랜덤 좌석 번호: ${randomIndex}</p>
    `;

});

// 참여자 명단 관리하기
const members = [];

const memberInput = document.getElementById("memberInput");
const memberButton = document.getElementById("memberButton");
const memberCount = document.getElementById("memberCount");
const memberList = document.getElementById("memberList");
const memberText = document.getElementById("memberText");

function renderMemberList() {
    memberList.innerHTML = "";

    members.forEach(function (member) {
        memberList.innerHTML += `<li>${member}</li> `;
    });

    memberCount.textContent = `현재 참여자 ${members.length}명`;
    memberText.textContent = `참여자 명단: ${members.join(", ")}`;
}

memberButton.addEventListener("click", function () {
    const member = memberInput.value.trim();

    if (member === "") {
        alert("참여자 이름을 입력하세요.");
        memberInput.focus();
        return;
    }

    members.push(member);
    memberInput.value = "";
    memberInput.focus();

    renderMemberList();
});

// 3.8.6 브라우저 객체와 문서 객체</h2>
// 실행 예제 - 일정 시간 후 알림창 출력하기</p>
const alertButton = document.getElementById("alertButton");

/*
alertButton.addEventListener("click", function() {
setTimeout(function() {
alert("'3초 후 알림창");
}, 3000);

3);
*/

/* 중복 클릭 방지 */
alertButton.addEventListener("click", function () {
    alertButton.disabled = true;
    alertButton.textContent = "3초 후 알림창 표시 예정";

    setTimeout(function () {
        alert("'3초 후 알림창");

        alertButton.disabled = false;
        alertButton.textContent = "버튼 클릭";
    }, 3000);
});

// 실행 예제 - 실시간 시계 동작하기</p>
const clockResult = document.getElementById("clockResult");
const startClock = document.getElementById("startClock");
const stopClock = document.getElementById("stopClock");

let clockTimer = null;

startClock.addEventListener("click", function () {
    if (clockTimer !== null) {
        return;
    }

    clockTimer = setInterval(function () {
        const today = new Date();
        clockResult.textContent = today.toLocaleTimeString();
    }, 1000);
});

stopClock.addEventListener("click", function () {
    if (clockTimer === null) {
        return;
    }

    clearInterval(clockTimer);
    clockTimer = null;
});
//예제 - 페이지 이동하기</p>
const noticeButton = document.getElementById("noticeButton");

noticeButton.addEventListener("click", function () {
    location.href = "03-element.html";
});

// 예제 - 썸네일 이미지 선택하기</p>

const imageBax = document.getElementById("imageBax");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
image1.style.width = "100px";
image2.style.width = "100px";
image3.style.width = "100px";
imageBax.style.width = "300px";

image1.addEventListener("click", function () {
    imageBax.src = image1.src;
});

image2.addEventListener("click", function () {
    imageBax.src = image2.src;
});

image3.addEventListener("click", function () {
    imageBax.src = image3.src;
});

// 예제 - 1초 간격으로 새로운 이미지 보여주기</p>
const imageTimeBax = document.getElementById("imageTimeBax");
// imageTime.style.width = "300px";
imageTimeBaxFn();
const bears = ['bear-doll.png', 'bear-heart.png', 'bear-moon.png'];

function imageTimeBaxFn() {
    if (clockTimer !== null) {
        return;
    }

    clockTimer = setInterval(function () {
        const today = new Date();
        const randomIndex = Math.floor(Math.random() * bears.length);
        const selectedBear = bears[randomIndex];

        imageTimeBax.innerHTML = `<img id="imageTime"src="../image/${selectedBear}">`
    }, 1000);
}


// 예제 - 인증번호 생성하기</p>
const certificationNum = document.getElementById("certificationNum");
const pageRefresh = document.getElementById("pageRefresh");

certificationNum.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * (99999 - 10000) + 10000);
    console.log(randomIndex);
});

pageRefresh.addEventListener("click", function () {
    location.href = location.href;
});

// const courseType = document.getElementsByClassName("radio-label");
// const courseType = document.getElementsByName('courseType');
// 예제 - 강의 신청 양식</p>
const courseForm = document.getElementById("courseForm");
const studentName = document.getElementById("studentName");
const courseName = document.getElementById("courseName");

// 이게정답인데. 왜 오류가 나지?
// const courseType = document.querySelector('input[name="courseType"]:checked');
const courseType = document.querySelector('input[name="courseType"]');
const courseResult = document.getElementById("courseResult");

courseForm.addEventListener('submit', function (event) {
    event.preventDefault();


    // const coursecourseFormValue = courseForm.value;
    const student = studentName.value.trim();
    const course = courseName.value;
    const courseTypeValue = courseType.value;
    courseResult.innerHTML = `
    <p><strong>수강생:</strong> ${student}</p>
    <p><strong>강의명:</strong> ${course}</p>
    <p><strong>수업 방식:</strong> ${courseTypeValue}</p>
    `;
});

// 예제 - 상담 신청 양식</p>
const counselForm = document.getElementById("counselForm");
const counselName = document.getElementById("counselName");
const counselDate = document.getElementById("counselDate");
const counselContent = document.getElementById("counselContent");
const counselNames = document.getElementById("counselNames");

const counselResult = document.getElementById("counselResult");

counselForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const counselNameV = counselName.value.trim();
    const counselDateV = counselDate.value;
    const counselContentB = counselContent.value;
    const counselNamesV = counselNames.value;

    counselResult.innerHTML = `
    <p><strong>이름:</strong> ${counselNameV}</p>
    <p><strong>상담 날짜:</strong> ${counselDateV}</p>
    <p><strong>상담 분야:</strong> ${counselContentB}</p>
    <p><strong>상감 내용:</strong> ${counselNamesV}</p>
    `;
});

