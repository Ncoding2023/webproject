// 공통 정규 표현식
const nameRegExp = /^[가-힣]{2,5}$/;
const idRegExp = /^[A-Za-z][A-Za-z0-9]{4,7}$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegExp = /^010-\d{4}-\d{4}$/;

// 공통 함수
function printMessage(element, message, isConfirm) {
    element.textContent = message;
    element.className = isConfirm ? "message-text confirm" : "message-text error";
}


const checkRegExpButton = document.getElementById("checkRegExpButton");
const regExpResult = document.getElementById("regExpResult");

checkRegExpButton.addEventListener("click", function () {
    const regExp = /JavaScript/;
    const text = "JavaScript 기초 수업입니다.";

    const testResult = regExp.test(text);
    const execResult = regExp.exec(text);

    regExpResult.innerHTML = `
        <p><strong>검사 문자열 :</strong> ${text}</p>
        <p><strong>정규 표현식 :</strong> /JavaScript/</p>
        <p><strong>test() 결과 :</strong> ${testResult}</p>
        <p><strong>exec() 결과 :</strong> ${execResult === null ? "null" : execResult[0]}</p>
    `;
});

// 이름 유효성 검사 nameRegExp
const userName = document.getElementById("userName");
const nameCheckButton = document.getElementById("nameCheckButton");
const nameResult = document.getElementById("nameResult");

nameCheckButton.addEventListener("click", function () {
    const name = userName.value.trim();

    if (name === "") {
        printMessage(nameResult, "이름을 입력하세요.", false);
        userName.focus();
        return;
    }

    if (nameRegExp.test(name)) {
        printMessage(nameResult, "사용 가능한 이름입니다.", true);
    } else {
        printMessage(nameResult, "이름은 한글 2~5글자로 입력해야 합니다.", false);
        userName.focus();
    }
});

// 아이디 유효성 검사 idRegExp
const userId = document.getElementById("userId");
const idCheckButton = document.getElementById("idCheckButton");
const idResult = document.getElementById("idResult");

idCheckButton.addEventListener("click", function () {
    const id = userId.value.trim();

    if (id === "") {
        printMessage(idResult, "아이디를 입력하세요.", false);
        userId.focus();

        return;
    }
    if (idRegExp.test(id)) {
        printMessage(idResult, "사용 가능한 아이디입니다.", true);
    } else {
        printMessage(idResult, "아이디는 영문자로 시작하고, 영문자와 숫자만 사용하여 5~8글자로 입력해야 합니다.", false);
        userId.focus();
    }
});

// 비밀번호 유효성 검사 passwordRegExp
const userPassword = document.getElementById("userPassword");
const passwordCheckButton = document.getElementById("passwordCheckButton");
const passwordResult = document.getElementById("passwordResult");

passwordCheckButton.addEventListener("click", function () {
    const password = userPassword.value;

    if (password === "") {
        printMessage(passwordResult, "비밀번호를 입력하세요.", false);
        userPassword.focus();
        return;
    }
    if (passwordRegExp.test(password)) {
        printMessage(passwordResult, "사용 가능한 비밀번호입니다.", true);
    } else {
        printMessage(passwordResult, "비밀번호는 영문자, 순자, 특수문자를 각각 하나 이상 포함하여 6~10글자로 입력해야 합니다.", false);
        userPassword.focus();
    }
});

// 이메일 검사 emailRegExp
const emailInput = document.getElementById("emailInput");
const emailCheckButton = document.getElementById("emailCheckButton");
const emailResult = document.getElementById("emailResult");

emailCheckButton.addEventListener("click", function () {
    const email = emailInput.value.trim();

    if (email === "") {
        printMessage(emailResult, "이메일을 입력하세요.", false);
        emailInput.focus();
        return;
    }

    if (emailRegExp.test(email)) {
        printMessage(emailResult, "올바른 이메일 형식입니다.", true);
    } else {
        printMessage(emailResult, "이메일은 아이디@도메인 형식으로 입력해야 합니다.", false)
        emailInput.focus();
    }
});

// 휴대폰 번호 검사 phoneRegExp
const phoneInput = document.getElementById("phoneInput");
const phoneCheckButton = document.getElementById("phoneCheckButton");
const phoneResult = document.getElementById("phoneResult");

phoneCheckButton.addEventListener("click", function () {
    const phone = phoneInput.value.trim();

    if (phone === "") {
        printMessage(phoneResult, "휴대폰 번호를 입력하세요.", false);
        phoneInput.focus();
        return;
    }
    if (phoneRegExp.test(phone)) {
        printMessage(phoneResult, "올바른 휴대폰 번호 형식입니다.", true);
    } else {
        printMessage(phoneResult, "휴대폰 번호는 010-0000-0000 형식으로 입력해야 합니다.", false);
        phoneInput.focus();
    }
});


//  회원가입 form 예제</h2>
const joinForm = document.getElementById("joinForm");
const joinCheckButton = document.getElementById("joinCheckButton");
const joinResult = document.getElementById("joinResult");

// 입력 태그
const joinUserNameInput = document.getElementById("joinUserName");
const joinUserIdInput = document.getElementById("joinUserId");
const joinUserPasswordInput = document.getElementById("joinUserPassword");
const joinEmailInput = document.getElementById("joinEmailInput");
const joinPhoneInput = document.getElementById("joinPhoneInput");

// 정규식 표현 태그
const joinUserNameDiv = document.getElementById("joinUserNameDiv");
const joinUserIdDiv = document.getElementById("joinUserIdDiv");
const joinUserPasswordDiv = document.getElementById("joinUserPasswordDiv");
const joinEmailDiv = document.getElementById("joinEmailDiv");
const joinPhoneDiv = document.getElementById("joinPhoneDiv");

// 유효성 검사가 많아 함수 선언
function validateField(input, regex, emptyMsg, regexTrueMsg, regexFalseMsg, resultEl) {
    input.addEventListener("input", function () {
        const value = input.value.trim();

        if (value === "") {
            printMessage(resultEl, emptyMsg, false);
            input.focus();
            return false;
        }

        if (regex.test(value)) {
            printMessage(resultEl, regexTrueMsg, true);
            return true;
        } else {
            printMessage(resultEl, regexFalseMsg, false);
            input.focus();
            return false;
        }
    });
}

joinForm.addEventListener("input", () => {
    validateField(joinUserNameInput, nameRegExp, "이름을 입력하세요.", "사용 가능한 이름입니다.", "이름은 한글 2~5글자로 입력해야 합니다.", joinUserNameDiv);
    validateField(joinUserIdInput, idRegExp, "아이디를 입력하세요.", "사용 가능한 아이디입니다.", "아이디는 영문자로 시작하고, 영문자와 숫자만 사용하여 5~8글자로 입력해야 합니다.", joinUserIdDiv);
    validateField(joinUserPasswordInput, passwordRegExp, "비밀번호를 입력하세요.", "사용 가능한 비밀번호입니다.", "비밀번호는 영문자, 순자, 특수문자를 각각 하나 이상 포함하여 6~10글자로 입력해야 합니다.", joinUserPasswordDiv);
    validateField(joinEmailInput, emailRegExp, "이메일를 입력하세요.", "올바른 이메일 형식입니다.", "이메일은 아이디@도메인 형식으로 입력해야 합니다.", joinEmailDiv);
    validateField(joinPhoneInput, phoneRegExp, "휴대폰 번호를 입력하세요.", "올바른 휴대폰 번호 형식입니다.", "휴대폰 번호는 010-0000-0000 형식으로 입력해야 합니다.", joinPhoneDiv);
});

joinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const joinUserName = joinUserNameInput.value.trim();
    const joinUserId = joinUserIdInput.value.trim();
    const joinUserPassword = joinUserPasswordInput.value.trim();
    const joinEmail = joinEmailInput.value.trim();
    const joinPhone = joinPhoneInput.value.trim();

    joinResult.innerHTML = `
        <P><strong>이름 : </strong> ${joinUserName}</P>
        <P><strong>아이디 : </strong> ${joinUserId}</P>
        <P><strong>비번 : </strong> ${joinUserPassword}</P>
        <P><strong>이메일 : </strong> ${joinEmail}</P>
        <P><strong>휴대폰 번호 : </strong> ${joinPhone}</P>
    `;
});

// 정규식 표현 초기화
joinForm.addEventListener("reset", function (event) {
    joinUserNameDiv.textContent = "";
    joinUserIdDiv.textContent = "";
    joinUserPasswordDiv.textContent = "";
    joinEmailDiv.textContent = "";
    joinPhoneDiv.textContent = "";
});
