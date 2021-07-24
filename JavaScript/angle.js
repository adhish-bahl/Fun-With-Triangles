const angle1DOM = document.querySelector(".angle1");
const angle2DOM = document.querySelector(".angle2");
const angle3DOM = document.querySelector(".angle3");
const btn = document.querySelector(".checkBtn");
const output = document.querySelector(".output");

btn.addEventListener("click", ()=> {
    const angle1 = Number(angle1DOM.value);
    const angle2 = Number(angle2DOM.value);
    const angle3 = Number(angle3DOM.value);
    // console.log(angle2, angle1, angle3);
    const sum = angle3 + angle2 + angle1;
    if(sum === 180) {
        output.textContent = "Yeyeyei! Triangle with above angles do exist."
    } else {
        output.textContent = "Oops! Triangle with above angles do not exist."
    }
});