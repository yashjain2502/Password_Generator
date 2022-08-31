const PwEle=document.getElementById("pw");
const copyEle=document.getElementById("copy");
const lenEle=document.getElementById("len");
const upperEle=document.getElementById("upper");
const lowerEle=document.getElementById("lower");
const numberEle=document.getElementById("number");
const symbolEle=document.getElementById("symbol");
const generateEle=document.getElementById("generate");

const lower="abcdefghijklmnopqrstuvwxyz";
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
const number="1234567890";
const symbol="!@#$%^&*()_-+/|?";

function generateLower(){
    return lower[Math.floor(Math.random() * lower.length)];
}

function generateUpper(){
    return upper[Math.floor(Math.random() * upper.length)];
}

function generateNumber(){
    return number[Math.floor(Math.random() * number.length)];
}

function generateSymbol(){
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function generateX(){
    const temp=[];
    if(upperEle.checked) {
        temp.push(generateUpper());
    }
    if(lowerEle.checked) {
        temp.push(generateLower());
    }
    if(symbolEle.checked) {
        temp.push(generateSymbol());
    }
    if(numberEle.checked) {
        temp.push(generateNumber());
    }
    if(temp.length===0) return "";

    return temp[Math.floor(Math.random() * temp.length)];
}

generateEle.addEventListener("click", function(){
    generateEle.classList.add("pressed");
    setTimeout(function(){
        generateEle.classList.remove("pressed");
    },100);
    let len=lenEle.value;
    let pass="";
    for(let i=0;i<len;i++){
        const X=generateX();
        pass+=X;
    }
    PwEle.innerText=pass;
});
copyEle.addEventListener("click",() =>{
    const text=document.createElement("textarea");
    const pass=PwEle.innerText;
    if(!pass) return;

    text.value=pass;
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    text.remove();
    alert("password copied to clipboard");
});