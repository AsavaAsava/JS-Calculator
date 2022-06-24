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

const addb =document.querySelector('input[name="addb"]');
const subb =document.querySelector('input[name="subb"]');
const mulb =document.querySelector('input[name="mulb"]');
const divb =document.querySelector('input[name="divb"]');

const pointb =document.querySelector('input[name="potb"]');
const resultb =document.querySelector('input[name="resultb"]');
const resultDisplay =document.querySelector('input[name="displayResult"]');

let num1
let num2

let pvalue =1
let result
let op

b0.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b0.value).toString()
    pvalue = pvalue*10
})
b1.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b1.value).toString()
    pvalue = pvalue*10  
})
b2.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b2.value).toString()
    pvalue = pvalue*10 
})
b3.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b3.value).toString()
    pvalue = pvalue*10
})
b4.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b4.value).toString()
    pvalue = pvalue*10
})
b5.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b5.value).toString()
    pvalue = pvalue*10
})
b6.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b6.value).toString()
    pvalue = pvalue*10
})
b7.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b7.value).toString()
    pvalue = pvalue*10
})
b8.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b8.value).toString()
    pvalue = pvalue*10
})
b9.addEventListener("click", () => {
    resultDisplay.value = (parseInt(indicator.textContent * pvalue) + b9.value).toString()
    pvalue = pvalue*10
})