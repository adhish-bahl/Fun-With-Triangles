const check = document.querySelector(".submit");
const correctAns = document.querySelectorAll(".correctAns");
const output = document.querySelector(".output");

check.addEventListener("click", ()=> {
    let score = 0;
    for(let i = 0; i < correctAns.length; i++) {
        if(correctAns[i].checked == true)
            score++;
    }
    output.textContent = "You scored " + score + "/10 points.    ";
    check.style.display = "none";
})