const buttons=document.querySelectorAll("button");
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
    let playerChoice=button.dataset.choice;
   let options=["rock","paper","scissors"]
let randomIndex=Math.floor(Math.random()*options.length);
let randomChoice=options[randomIndex];
let result="";

if((playerChoice=="rock" && randomChoice=="scissors") || (playerChoice==="paper" && randomChoice==="rock")|| (playerChoice==="scissors" && randomChoice==="paper")){
    result="You win";
}
else if(playerChoice === randomChoice){
    result="Its a draw";
}
else{
    result="You lose";
}
 document.querySelector("#user-choice").innerText = playerChoice;
    document.querySelector("#computer-choice").innerText = randomChoice;
    document.querySelector("#winner").innerText = result;

    // (Optional) Make sure result box is visible
    document.querySelector("#result").style.display = "block";
});
});

