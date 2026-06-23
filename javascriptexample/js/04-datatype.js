function variableTest() {
    let age = 20;
    const name = '홍길동';

    age = 21;

    document.querySelector('#variableResult').innerHTML =`
        이름 : ${name} <br>
        나이 : ${age} <br>
        let으로 선언한 age는 값을 다시 대입할 수 있고, const로 선언한 name은 다시 대입할 수 없다.
    `;
}

function primitiveTypeTest() {
    const name = '홍길동';
    const age = 20;
    const isStudent = true;
    let address;
    let phone = null;


    document.querySelector('#primitiveResult').innerHTML =`
        name : ${name} / typeof : ${typeof name} <br>
        age : ${age} / typeof : ${typeof age} <br>
        isStudent : ${isStudent} / typeof : ${typeof isStudent} <br>
        address : ${address} / typeof : ${typeof address} <br>
        phone : ${phone} / typeof : ${typeof phone}
    `;
}

function referenceTypeTest() {
    const fruits = ['사과', '바나나', '딸기'];
    const student = {
         name : '김철수',
         score : 90
    };

    document.querySelector('#referenceResult').innerHTML =`
        배열 fruits : ${fruits.join(',')} / typeof : ${typeof fruits} <br>
        객체 student : ${student.name}, ${student.score} / typeof : ${typeof fruits} <br>
        배열과 객체는 여러 값을 묶어 관리하는 참조 자료형이다.
        
    `;

    console.log(fruits);
    console.log(student);
}

function typeofTest() {
    const values = ['JavaScript', 100, 3.14, true, undefined, null,[1,2,3],function() {}];
    const result = values.map((value) =>`${String(value)} : ${typeof value}`);

    document.querySelector('#referenceResult').innerHTML =result.join('<br>');
}

function conversionTest() {
    const convertInput = document.getElementById('convertInput');
    const conversionResult = document.getElementById('conversionResult');

    const inputValue = convertInput.value;

    const numberValue = Number(inputValue);
    const stringValue = String(inputValue);
    const booleanValue = Boolean(inputValue);

    conversionResult.innerHTML =`
    <p>입력값 : ${inputValue}</p>
    <p>Number(입력값): ${numberValue} / 자료형 : ${typeof numberValue}</p>
    <p>String(입력값): ${stringValue} / 자료형 : ${typeof stringValue}</p>
    <p>Boolean(입력값): ${booleanValue} / 자료형 : ${typeof booleanValue}</p>
    `;
}

// 예제1 ~
function numSubTest() {
    const numInput1 = document.getElementById('numInput1');
    const numInput2 = document.getElementById('numInput2');
    // const numSubResult = document.getElementById('numSubResult');
    const numSubResult = document.querySelector('#numSubResult');
//  이렇게 하면 값이 없어도 0으로 나온다
    // const num1 = Number(numInput1.value.trim());
    // const num2 = Number(numInput2.value.trim());
    const num1 = numInput1.value.trim();
    const num2 = numInput2.value.trim();

    if (num1 === '' || num2 === '' || isNaN(num1) || isNaN(num2)) {
        numSubResult.textContent = '숫자를 입력해 주세요.';
        numInput1.focus;
        return;
    }
    const total = Number(num1) + Number(num2);
    numSubResult.value =`${total}`;
}

// function printTitle() {
//     const title = document.querySelector('#titleResult');

//     title.innerHTML = 'Hello, JavaScript!'
//     title.style.color = 'orange';
//     title.style.border = '1px solid #000';
//     title.style.borderRadius = '10px';
//     title.style.padding = '#555';
//     title.style.width = 'fit-content';
// }