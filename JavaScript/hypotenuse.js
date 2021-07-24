const side1DOM = document.querySelector(".length1");
const side2DOM = document.querySelector(".length2");
const btn = document.querySelector(".checkBtn");
const output = document.querySelector(".output");

btn.addEventListener("click", ()=>{
    const length1 = Number(side1DOM.value);
    const length2 = Number(side2DOM.value);
    const c = Math.sqrt((length1 * length1) + (length2 * length2));
    output.textContent = "c = " + c;
});