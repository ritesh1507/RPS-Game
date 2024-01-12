let choice = document.querySelectorAll(".bnt");

let userScore = 0;
let compScore = 0;

// let cnt="";

// for(const val of choice){
//     val.addEventListener("click", () => {
//         cnt = val.getAttribute("id");
//         console.log(cnt);
//     });
// }

let msg = document.querySelector("#msg");

    // let arr = ["Rock", "Paper", "Scissors"];
const decision = (i) => {
    const cmpChoice = Math.floor(Math.random() * 3);
    console.log(cmpChoice);
    if(i === cmpChoice){
        msg.innerText = "Game Draw!!";
        document.querySelector(".msg-container").style.backgroundColor = "black";
    }
    else if(i === 0){
        if(cmpChoice === 1){
            msg.innerText = "Computer Won!!";
            compScore++;
            document.querySelector("#comp-score").innerText = compScore;
            document.querySelector(".msg-container").style.backgroundColor = "red";
        }
        else{
            msg.innerText = "You Won!!";
            userScore++;
            document.querySelector("#user-score").innerText = userScore;
            document.querySelector(".msg-container").style.backgroundColor = "green";
        }
    }
    else if(i === 1){
        if(cmpChoice === 2){
            msg.innerText = "Computer Won!!";
            compScore++;
            document.querySelector("#comp-score").innerText = compScore;
            document.querySelector(".msg-container").style.backgroundColor = "red";
        }
        else{
            msg.innerText = "You Won!!";
            userScore++;
            document.querySelector("#user-score").innerText = userScore;
            document.querySelector(".msg-container").style.backgroundColor = "green";
        }
    }
    else{
        if(cmpChoice === 0){
            msg.innerText = "Computer Won!!";
            compScore++;
            document.querySelector("#comp-score").innerText = compScore;
            document.querySelector(".msg-container").style.backgroundColor = "red";
        }
        else{
            msg.innerText = "You Won!!";
            userScore++;
            document.querySelector("#user-score").innerText = userScore;
            document.querySelector(".msg-container").style.backgroundColor = "green";
        }
    }
}


for(let i=0; i<3; i++){
    choice[i].addEventListener("click", () => {
        decision(i);
    });
}


// msg.innerText = "hello";