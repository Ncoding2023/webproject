// 학습 주제 목록 만들기
const subjectInput = document.getElementById("subjectInput");
const addSubjectButton = document.getElementById("addSubjectButton");
const subjectList = document.getElementById("subjectList");

addSubjectButton.addEventListener("click", function () {
    const subject = subjectInput.value.trim();

    if (subject === "") {
        alert("학습 주제를 입력하세요.");
        subjectInput.focus;
        return;
    }

    const li = document.createElement("li");
    const text = document.createTextNode(subject);

    li.appendChild(text);
    subjectList.appendChild(li);

    subjectInput.value = "";
    subjectInput.focus();
});

subjectList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        subjectList.removeChild(event.target);
    }

});

// 할 일 완료 표시하기
const completeButtons = document.querySelectorAll(".complete-button");

completeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const li = button.parentElement;

        li.classList.toggle("complete");

    });

});

// 이전/다음 할 일 선택하기
const prevTodoButton = document.getElementById("prevTodoButton");
const nextTodoButton = document.getElementById("nextTodoButton");

prevTodoButton.addEventListener("click", function () {
    const selectedTodo = document.querySelector("#todoMoveList .selected");
    const prevTodo = selectedTodo.previousElementSibling;

    if (prevTodo === null) {
        alert("첫 번째 할 일");
        return;
    }

    selectedTodo.classList.remove("selected");
    prevTodo.classList.add("selected");
});

nextTodoButton.addEventListener("click", function () {
    const selectedTodo = document.querySelector("#todoMoveList .selected");
    const nextTodo = selectedTodo.nextElementSibling;

    if (nextTodo === null) {
        alert("마지막 할 일");
        return;
    }
    selectedTodo.classList.remove("selected");
    nextTodo.classList.add("selected");

});

// FAQ 답변 열고 달기
const questionButtons = document.querySelectorAll(".question-button");

questionButtons.forEach(function(button) {
    button.addEventListener("click", function () {
        const answer = button.nextElementSibling;

        answer.classList.toggle("show");
    });
});