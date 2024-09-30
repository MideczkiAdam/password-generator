const pwdEl = document.getElementById("password")
const lengthNumEl = document.getElementById("lengthNum")
const sliderEl = document.getElementById("slide")

const checkboxes = {
    upper : document.getElementById("upper"),
    lower: document.getElementById("lower"),
    numbers: document.getElementById("nums"),
    symbols: document.getElementById("symbols")
}

const genBtn = document.getElementById("gen")

updateNum()
function updateNum(){
    lengthNumEl.innerText = sliderEl.value
}

sliderEl.addEventListener("input", updateNum)

function generatePwd(){
    const letters = "abcdefghijklmnopqrstuvwyxz"
    const upper = letters.toUpperCase()
    const numbers = "0123456789"
    const symbols = "$ß@&#><!%+/*"

    let charBank = ""

    if (checkboxes.lower.checked) charBank += letters;
    if (checkboxes.upper.checked) charBank += upper;
    if (checkboxes.numbers.checked) {
        charBank += numbers
        charBank += numbers
    };
    if (checkboxes.symbols.checked) {
        charBank += symbols
        charBank += symbols
    };

    let li = charBank.split("") // str -> lista
    li.sort(()=> 0.5 - Math.random()); // ratyi randomizing
    let res = ""
    for(let i = 0; i< sliderEl.value* 1; i++){
        res += li[i];
    }
    pwdEl.innerText = res
}

genBtn.addEventListener("click", generatePwd)