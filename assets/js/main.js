const b0 =document.querySelector('input[name="b0"]');
const b1 =document.querySelector('input[name="b1"]');
const b2 =document.querySelector('input[name="b2"]');
const b3 =document.querySelector('input[name="b3"]');
const b4 =document.querySelector('input[name="b4"]');
const b5 =document.querySelector('input[name="b5"]');
const b6 =document.querySelector('input[name="b6"]');
const b7 =document.querySelector('input[name="b7"]');
const b8 =document.querySelector('input[name="b8"]');
const b9 =document.querySelector('input[name="b9"]');

const lBr =document.querySelector('input[name="lBr"]');
const rBr =document.querySelector('input[name="rBr"]');

const addb =document.querySelector('input[name="addb"]');
const subb =document.querySelector('input[name="subb"]');
const mulb =document.querySelector('input[name="mulb"]');
const divb =document.querySelector('input[name="divb"]');

const pointb =document.querySelector('input[name="potb"]');
const resultb =document.querySelector('input[name="resultb"]');
const resultDisplay =document.querySelector('input[name="displayResult"]');
const clearB = document.querySelector('input[name="clear"]');
const delB = document.querySelector('input[name="delete"]');




let addExpression = (bValue) =>{
    resultDisplay.value = (resultDisplay.value + bValue)
}
clearB.addEventListener("click",() =>{
    resultDisplay.value="";
})
delB.addEventListener("click",() =>{
    resultDisplay.value=resultDisplay.value.slice(0,-1)
})
