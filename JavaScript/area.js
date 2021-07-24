const radio1 = document.querySelector("#inputChoice1");
const radio2 = document.querySelector("#inputChoice2");
const radio3 = document.querySelector("#inputChoice3");

const div1DOM = document.querySelector(".baseHeight");
const div2DOM = document.querySelector(".sides3");
const div3DOM = document.querySelector(".sides2");

const base = document.querySelector(".length11");
const height = document.querySelector(".length12");

const a = document.querySelector(".length21");
const b = document.querySelector(".length22");
const c = document.querySelector(".length23");

const b2 = document.querySelector(".length31");
const c2 = document.querySelector(".length32");
const angle2 = document.querySelector(".length33");

const btn1 = document.querySelector(".checkBtn1");
const btn2 = document.querySelector(".checkBtn2");
const btn3 = document.querySelector(".checkBtn3");

const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");

radio1.addEventListener("click", ()=>{
    div1DOM.style.display = "block";
    div2DOM.style.display = "none";
    div3DOM.style.display = "none";
})

radio2.addEventListener("click", ()=>{
    div1DOM.style.display = "none";
    div2DOM.style.display = "block";
    div3DOM.style.display = "none";
})

radio3.addEventListener("click", ()=>{
    div1DOM.style.display = "none";
    div2DOM.style.display = "none";
    div3DOM.style.display = "block";
})

btn1.addEventListener("click", ()=> {
    const baseVal = Number(base.value);
    const heightVal = Number(height.value);
    output1.textContent = "Area = " + (.5 * baseVal * heightVal);
});

btn2.addEventListener("click", ()=> {
    const aVal = Number(a.value);
    const bVal = Number(b.value);
    const cVal = Number(c.value);
    let ans;
    
    if((a + b) > c && (b + c) > a && (a + c) > b) {
        console.log(aVal,bVal, cVal);
        const s = (a + b + c) / 2;
        ans = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
        output2.textContent = "Error: triangle is not possibelwith above specs!";
    }  
    output2.textContent = "Area = " + ans;
});

btn3.addEventListener("click", ()=> {});