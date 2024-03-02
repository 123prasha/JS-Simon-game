let gameseq = [];
let userseq = [];

let btns = ["yellow", "pink", "blue", "purple"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
   
});

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash")
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250);
}
function levelUp() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let rndIdx = Math.floor(Math.random() * 3);
    let rndclr = btns[rndIdx];
    let rndbtn = document.querySelector(`.${rndclr}`);
    gameseq.push(rndclr);
    console.log(gameseq);
    gameFlash(rndbtn);
}
function checkAns(idx){
  if(userseq[idx] == gameseq[idx]) {
      if(userseq.length == gameseq.length) {
       setTimeout(levelUp, 500);
      }
    }else {h3.innerHTML = `Game over! Your score was <b>${level}<b> <br>press any key to start again.`;
           document.querySelector("body").style.backgroundColor = "red";
           setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
           }, 150);
           reset();     
}
    
}
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    usercolor= btn.getAttribute("id")
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}
let allbtn = document.querySelectorAll(".btn")
for(btn of allbtn) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}