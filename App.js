let allBtn = document.querySelectorAll(".box");
let mainbox = document.querySelector("main")
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".win");
player1 = true; 

//winning patterns
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//giving truns to players
allBtn.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("button is click")
            if(player1 === true){
                box.innerText = "O";
                player1 = false;
                
            }else {
                box.innerText = "X";
                player1 = true;
            }
        box.disabled = true;
        checkWinner();
    }) ;

});

//reset game
const resetgame = ()=>{
    player1=true;
    msgContainer.classList.add("hide");
    for(box of allBtn){ 
        box.innerText="";
        box.disabled = false;
    }
}

//new game
const newgame = ()=>{
    player1=true;
    msgContainer.classList.add("hide");
    mainbox.classList.remove("hide");
    for(box of allBtn){ 
        box.innerText="";
        box.disabled = false;
    }
}

//show winner
const showWinner = (winner)=>{
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide")

    //for disable the btns to not play after win
    for(let box of allBtn){
        box.disabled=true;
    }
}

//checking the winner
const checkWinner = ()=>{
    for(pattern of winPattern){
        const pos1 = allBtn[pattern[0]].innerText;
        const pos2 = allBtn[pattern[1]].innerText;
        const pos3 = allBtn[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 == pos2 && pos1 == pos3){
                showWinner(pos1);
                mainbox.classList.add("hide");
            }
        }
    }
}