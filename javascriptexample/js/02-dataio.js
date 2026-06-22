



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


