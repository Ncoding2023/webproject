// 예제 1. jQuery로 요소 선택하고 글자 변경하기
$("#changeTextButton").on("click", function () {
    $("#changeText").text('jQuery의 text() 메서드로 글자 내용을 변경하였다.').css('color', '#8a3d2b').css('font-weight', 'boid');
});


// 예제 2. 버튼 클릭 이벤트 처리하기
$("#eventButton").on("click", function () {
    $("#eventMessage").toggle();
});

/*

$("#image").on("mouseenter", function() {
$(this).attr("src", "../image/dog.png") ;
});

$("#image").on("mouseleave", function() {
$(this).attr("src", "../image/cat.png");
});
*/
// hover같은 역할??
// mouse enter = 마우스가 있을때
// mouseleave = 마우스가 없을때

$("#image").on({
    mouseenter: function () {
        $(this).attr("src", "../image/dog.png");
    },
    mouseleave: function () {
        $(this).attr("src", "../image/cat.png");
    }
});

// 예제 3. 클래스 추가/제거로 스타일 변경하기
$("#addClassButton").on("click", function () {
    $("#styleBox").addClass("active-style");

});

$("#removeClassButton").on("click", function () {
    $("#styleBox").removeClass("active-style");

});

$("#toggleClassButton").on("click", function () {
    $("#styleBox").toggleClass("active-style");

});

// 예제 4. 입력값 읽고 화면에 출력하기
$("#printNameButton").on("click", function () {
    const userName = $("#userName").val().trim();

    if (userName === "") {
        $("'#nameResult").text("이름을 입력하세요.");
        $("#userName").focus();
        return;
    }
    $("#nameResult").text(`${userName}님, jQuery 학습을 시작합니다.`);
    $("#userName").val("");
    $("#userName").focus();
});