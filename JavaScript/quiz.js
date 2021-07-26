const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const name = document.querySelector(".heading");
const coffee = document.querySelector(".coffee");
const s35 = document.querySelector(".s35");

btn2.style.display = "none";
btn3.style.display = "none";
btn4.style.display = "none";
name.style.display = "none";
coffee.style.display = "none";
s35.style.display = "none";

btn1.addEventListener("click", ()=> {
    btn1.style.display = "none";
    name.style.display = "block";
    s35.style.display="block";
    setTimeout(()=>{
        s35.style.display="none";
        btn2.style.display="block";
    }, 3500)
})

btn2.addEventListener("click", ()=> {
    btn2.style.display = "none";
    s35.textContent = "Oops, something went wrong again :c , wait for 5.7 seconds please! This is last time Pakaa!!";
    s35.style.display = "block";
    setTimeout(()=> {
        s35.style.display = "none";
        btn3.style.display = "block";
    }, 5700)
})

btn3.addEventListener("click", ()=> {
    btn3.style.display = "none";
    s35.textContent = "Kindly wait, your system is slow! we are loading the messasage! Approx time remaining: 10seconds...";
    s35.style.display = "block";
    setTimeout(()=> {
        s35.style.display = "none";
        coffee.style.display = "block";
        btn4.style.display = "none";
    }, 10000)
})