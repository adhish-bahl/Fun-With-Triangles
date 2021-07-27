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
    setTimeout(()=>{
        s35.style.display="block";
        setTimeout(()=> {
            s35.style.display="none";
            btn2.style.display="block";
        },10690);
    }, 10000)
})

btn2.addEventListener("click", ()=> {
    btn2.style.display = "none";
    name.textContent
    s35.textContent = "It was your brain which went missing. Here 🧠 we got it for you :)";
    s35.style.display = "block";
    setTimeout(()=> {
        s35.textContent = "Ruko ruko, abhi itne jaldi thode jana hai ! Wait for 6.9s  ";
        setTimeout(()=> {
            s35.style.display = "none";
            btn3.style.display = "block";
        }, 6900)
    }, 8000)
})

btn3.addEventListener("click", ()=> {
    btn3.style.display = "none";
    s35.textContent = "Wait your system is slow! We are loading the messasage! Approx time remaining: 69.69 seconds...";
    s35.style.display = "block";
    setTimeout(()=> {
        s35.textContent = "We used Adhish's power to load it faster! Your system is trash, just like you are!";
        setTimeout(()=>{
            s35.style.display = "none";
            coffee.style.display = "block";
            btn4.style.display = "none";
        }, 8000)
    }, 11000)
})