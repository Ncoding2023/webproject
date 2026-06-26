// 실행 예제 - 기본 데이터 접근
const person = {
    "name": "홍길동",
    "age": 25,
    "adress": {
        "nation": "Korea",
        "city": "Seoul",
        "postalCode": 12345
    },
    "hobby": ["영화", "여행"],
    "phone": "010-1234-5678"
};

const btnDefault = document.getElementById("btnDefault");
const view = document.getElementById("view");

btnDefault.addEventListener("click", function () {
    const tag = `
    <p><strong>이름:</strong> ${person.name}</p>
    <p><strong>나이:</strong> ${person["age"]}</p>
    <p><strong>주소:</strong> ${person.adress.nation, person.adress.city, person.adress.postalCode}</p>
    <p><strong>취미:</strong> ${person.hobby.join(", ")}</p>
    <p><strong>번호:</strong> ${person.phone}</p>
    `;

    view.innerHTML = tag;
});

// 배열을 포함한 객체
const company = {
    "name": "(주)자바컴퍼니",
    "since": 2013,
    "deopartment": ["기획팀", "영업팀", "디자인팀", "개발팀"],
    "biz": ["소프트웨어 개발", "통신판매업", "위치정보서비스"]
};



const btnJsonArray = document.getElementById("btnJsonArray");
const companyName = document.getElementById("companyName");
const since = document.getElementById("since");
const department = document.getElementById("department");
const biz = document.getElementById("biz");

btnJsonArray.addEventListener("click", function () {
    companyName.textContent = company.name;
    since.textContent = company.since;

    let deopartmentList = "";
    company.deopartment.forEach(function (dept) {
        deopartmentList += `<li>${dept}</li>`;
    });
    department.innerHTML = deopartmentList;

    let bizList = "";
    for (let i = 0; i < company.biz.length; i++) {
        bizList += `<li>${company.biz[i]}</li>`;
    }
    biz.innerHTML = bizList;
});

// 중첩 객체
const employee = {
    ceo: {
        "name": "홍길동",
        "age": 25
    },
    manager: {
        "name": "이과장",
        "age": 38
    },
    intern: {
        "name": "김철수",
        "age": 24
    }
};

const btnDisplayJsonTree = document.getElementById("btnDisplayJsonTree");
const companyTableBody = document.getElementById("companyTableBody");

btnDisplayJsonTree.addEventListener("click", function () {
    companyTableBody.innerHTML = "";

    for (let position in employee) {

        console.log(position);
        const person = employee[position];

        const row = `
        <tr>
            <td>${position}</td>
            <td>${person.name}</td>
            <td>${person.age}</td>
        </tr>
        `;
        companyTableBody.innerHTML += row;
    }

});

// 배열 안의 객체 - 예제풀이
const study = {
    "list": [
        { "No": 3, "title": "JaveScript", "content": "JavaScript는 웹 페이지를 동적으로 만들기 위한 프로그래밍 언어입니다. 이벤트 처리, DON 조작, 비동기 통신 등 다양한 기능을 제공합니다.", "count": 6, "date": "2026.05.22" },
        { "No": 2, "title": "CSS", "content": "CSS는 웹 페이지의 디자인을 담당하는 스타일시트 언어입니다. 레이아웃 구성, 색상 폰트, 애니메이션 등 을 설정할 수 있습니다.", "count": 15, "date": "2026.04.17" },
        { "No": 1, "title": "HTML", "content": "HTML의 웹 페이지의 구조를 정의하는 마크업 언어입니다. 제목, 단락, 링크, 이미지 등 페이지의 뼈대를 구성합니다.", "count": 19, "date": "2026.04.05" }

    ],

};

const studyTableBody = document.getElementById("studyTableBody");
studyTableBody.innerHTML = "";

// for (let position in study) {
const studyList = study.list;
const tableCount = document.getElementById("tableCount");
tableCount.textContent = studyList.length;
for (let i = 0; i < studyList.length; i++) {
    // console.log(position);

    // const studyPosition = study[position];

    const row = `
        
        <tr>
            <td style="text-align: center;">${studyList[i].No}</td>
            <td>${studyList[i].title}</td>
            <td>${studyList[i].content}</td>
            <td style="text-align: center;">${studyList[i].count}</td>
            <td style="text-align: center;">${studyList[i].date}</td>
        </tr>
        `;
    studyTableBody.innerHTML += row;
}



// 객체 리터럴과 메서드
const user = {
    name: "길동",
    hobby: ["영", "화"],
    // greeting : function() {
    //     return`안녕하세요. 나의 이름은 ${this.name}입니다. <br>취미는 ${this.hobby.join(", ")}입니다.`
    // }
    greeting() {    // 축약형 위에랑 같은거
        return `안녕하세요. 나의 이름은 ${this.name}입니다. <br>취미는 ${this.hobby.join(", ")}입니다.`
    }
};

// 추가예제
const member = {
    id: "nodeuser",
    pw: "node1234",
    name: "길동",
    mobile: "010-1224-1245",
    country: "대한민국"

};

const ObjectLiteralButton = document.getElementById("ObjectLiteralButton");
const ObjectLiteralResult = document.getElementById("ObjectLiteralResult");
const ObjectLiteralMemberResult = document.getElementById("ObjectLiteralMemberResult");

ObjectLiteralButton.addEventListener("click", function () {
    user.age = 25;

    ObjectLiteralResult.innerHTML = `
      <p>${user.greeting()}</p>  
      <p>추가된 age 값: ${user.age}</p>  
    `;

    let tag = "";
    for (let info in member) {
        tag += `${info}: ${member[info]} <br>`;
    }
    ObjectLiteralMemberResult.innerHTML = tag;
});

//JSON 문자열 변환
// 실행 예제 - 기본 데이터 접근
const convertUser = {
    "name": "javauser",
    "email": "javauser@naver.com",
    "phone": "010-1234-5678"
};

const convertButton = document.getElementById("convertButton");
const stringResult = document.getElementById("stringResult");
const jsonResult = document.getElementById("jsonResult");

convertButton.addEventListener("click", function () {
    const userString = JSON.stringify(convertUser);
    let userDate = "";

    JSON.parse(userString, function (key, value) {
        if (key !== "") {
            userDate += `${key}: ${value}<br>`;
        }
    });

    stringResult.textContent = userString;
    jsonResult.innerHTML = userDate;
});

//예제 1. 배열 데이터 추가와 출력
const subjects = ["HTML", "CSS", "JavaScript"];

const subjectInput = document.getElementById("subjectInput");
const addSubject = document.getElementById("addSubject");
const subjectList = document.getElementById("subjectList");

function rederSubjectList() {
    subjectList.innerHTML = "";

    subjects.forEach(function (subject) {
        subjectList.innerHTML += `<li>${subject}</li>`;
    });
}

addSubject.addEventListener("click", function () {
    const subject = subjectInput.value.trim();

    if (subject === "") {
        alert("과목명을 입력 : ");
        subjectInput.focus();
        return;
    }

    subjects.push(subject);

    subjectInput.value = "";
    subjectInput.focus();

    rederSubjectList();
});

rederSubjectList();

//aslk;djaslk;asdlkadslhkadshlkadhklads

//예제 2. 도서 목록 추가하기
const library = {
    "books": [{ "title": "독서의 기술", "writer": "고명환", "date": "2026-07-08" },
    { "title": "내면 근력 결국 멘탈 게임이다", "writer": "짐 머핀", "date": "2026-04-26" },
    { "title": "맡은 운명을 데려온다", "writer": "이하영", "date": "2026-06-10" }
    ]
}

const books = library.books;

const bookTitle = document.getElementById("bookTitle");
const bookWriter = document.getElementById("bookWriter");
const bookDate = document.getElementById("bookDate");

const addBook = document.getElementById("addBook");
const bookList = document.getElementById("bookList");

function rederBookList() {
    bookList.innerHTML = `<tr>
                        <th>제목</th>
                        <th>저자</th>
                        <th>출판연도</th>
                    </tr>`;

    books.forEach(function (book) {
        bookList.innerHTML += `<tr>
        <td> ${book.title} </td>
        <td> ${book.writer} 저자(글)</td>
        <td> ${book.date} </td>
        </tr>`;
    });
}

addBook.addEventListener("click", function () {
    const title = bookTitle.value.trim();
    const writer = bookWriter.value.trim();
    const date = bookDate.value.trim();

    if (title === "") {
        alert("제목 입력");
        bookTitle.focus();
        return;
    }
    if (writer === "") {
        alert("저자 입력");
        bookWriter.focus();
        return;
    }
    if (date === "") {
        alert("날짜 선택");
        bookDate.focus();
        return;
    }

    books.push({ title, writer, date });


    bookTitle.value = "";
    bookTitle.focus();
    bookWriter.value = "";
    bookWriter.focus();
    bookDate.value = "";
    bookDate.focus();

    rederBookList();
});

rederBookList();

// ES6 클래스 기본 문법
// 실행 예제 - 회원 객체 생성하기</p>
class User {
    constructor(name, hobby) {
        this.name = name;
        this.hobby = hobby;
    }

    greeting() {
        return `안녕하세요. 제 이름은 ${this.name}입니다.`;
    }

    getHobbyText() {
        return this.hobby.join(", ");
    }
}

const classUserButton = document.getElementById("classUserButton");
const classUserResult = document.getElementById("classUserResult");

classUserButton.addEventListener("click", function () {
    const user = new User("홍길동", ["여행", "영화"]);

    classUserResult.innerHTML = `
        <p>${user.greeting()}</p>
        <p><strong>${user.getHobbyText()}</strong></p>
    `;
});

// 실행 예제 - 강의 신청 객체 생성하기</p>
class CourseApplication {
    constructor(studentName, courseName, status) {
        this.studentName = studentName;
        this.courseName = courseName;
        this.status = status;
    }




    getApplicationInfo() {
        return `${this.studentName}님은 ${this.courseName} 강의를 신청했습니다.`;
    }

    getStatusMassage() {
        return `현재 신청 상태는 ${this.studentName}입니다.`;
    }
}


const classCourseButton = document.getElementById("classCourseButton");
const classCourseResult = document.getElementById("classCourseResult");

classCourseButton.addEventListener("click", function () {
    const application = new CourseApplication("홍길동", "JavaScript 기초", "신청 완료");

    classCourseResult.innerHTML = `
    <p><strong>수강생:</strong> ${application.studentName}</p>
    <p><strong>강의명:</strong> ${application.courseName}</p>
    <p><strong>상태:</strong> ${application.status}</p>
    <p>${application.getApplicationInfo()}</p>
    <p>${application.getStatusMassage()}</p>
    `;
});


// 3.7.9 클래스의 getter와 setter</h2>
// 실행 예제 - 커피 이름 변경하기</p>
class Coffee {
    constructor(name) {
        this._name = name;  // 이건 내부에서만 쓰라고 살짝 숨겨놓은 변수 같은 거야
        // this._name = name;
    }
    // _(언더바)를 사용하는 것은 내부의 값이 있는지 확인용? 무한반복함.
    get name() {
        console.log("call getter");
        return this._name;
    }

    set name(name) {
        console.log("call setgetter");
        this._name = name;
    }

    display() {
        return `현재 선택된 커피 : ${this._name}`;
    }
}

const coffee = new Coffee("Americano");

const coffeeNameInput = document.getElementById("coffeeNameInput");
const coffeeButton = document.getElementById("coffeeButton");
const coffeeResult = document.getElementById("coffeeResult");

coffeeButton.addEventListener("click", function () {
    const coffeeName = coffeeNameInput.value.trim();

    if (coffeeName === "") {
        alert("커피 이름하세요.");
        coffeeNameInput.focus; //이건 안되는 경우가 너무 많아. 보기는 좋긴한데.
        return;
    }

    coffee.name = coffeeName;

    // 이걸 주석하는걸로 확인 가능
    coffeeResult.innerHTML = `
        <p><strong>커피명:</strong> ${coffee.name}</p>
        <p>${coffee.display}</p>
    `;

    coffeeNameInput.value = "";
    coffeeNameInput.focus();
});

// 야, 자바스크립트에서 언더바(_)는 진짜 특별한 문법이 아니야!
// 그냥 프로그래머들이 “이 변수나 속성은 내부용이니까 직접 건들지 마!” 라고 암묵적으로 표시하는 표식 같은 거야.
// 이때, _name은 “아, 이거 직접 쓰지 말고 getter/setter 통해서 읽고 써라!” 하는 일종의 약속인 거지.
// 하지만 실제로는 누구나 그냥 coffee._name 이렇게 외부에서 쓸 수도 있어.

// 그러니까 언더바는 접근 제한 기능은 아니고, 약속 표시!
// 코딩할 때 서로 지켜야 할 예의 같은 거라 생각하면 돼~
// 뤼튼 말투 어우

// 실행 예제 - 연락처 정보 변경하기
class PhoneInfo {
    constructor(name, phoneNumber) {
        this._name = name;
        this._phoneNumber = phoneNumber;
    }
    set name(name) {
        this._name = name;
    }
    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }
    get name() {
        return this._name;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    toString() {
        return `${this.name}님의 전화번호는 ${this.phoneNumber}입니다.`;
    }
}
const userNameInput = document.getElementById("userNameInput");
const phoneNumberInput = document.getElementById("phoneNumberInput");
const phoneInfoButton = document.getElementById("phoneInfoButton");
const phoneInfoResult = document.getElementById("phoneInfoResult");

phoneInfoButton.addEventListener("click", function () {
    const userName = userNameInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();

    if (userName === "" || phoneNumber === "") {
        alert("이름과 전화번호를 모두 입력해야 합니다.");
        userNameInput.focus();
        return;
    }
    const phoneInfo = new PhoneInfo(userName, phoneNumber);

    phoneInfoResult.textContent = phoneInfo.toString();

    userNameInput.value = "";
    phoneNumberInput.value = "";
    userNameInput.focus();
});
