const cells = document.querySelectorAll(".cell");
const newGame = document.querySelector(".new-btn");
const resetGame = document.querySelector(".reset-btn");
let turnO = true;
const countAll = document.querySelectorAll(".count")
const winCountX = document.querySelector(".countX");
const winCountT = document.querySelector(".countT");
const winCountY = document.querySelector(".countY");
let moves = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

cells.forEach(cell =>{
    cell.addEventListener('click',() => {
        console.log(`Cell ${cell.getAttribute('data-index')} clicked`);
        // cell.innerText = "ABCD";
        if (cell.innerText !== "") {
            return;
        }
        if(turnO){
            cell.innerText = "O";
            turnO = false;
        }
        else{
            cell.innerText = "X";
            turnO = true;
        }
        moves++;
        checkWinner();
    });
});

const checkWinner =() => {
    let winnerFound = false;
    for(let pattern of winPattern){
        let cell1Val = cells[pattern[0]].innerText;
        let cell2Val = cells[pattern[1]].innerText;
        let cell3Val = cells[pattern[2]].innerText;

        if(cell1Val != "" && cell2Val != "" && cell3Val != ""){
            if(cell1Val === cell2Val && cell2Val === cell3Val){
                if (cell1Val === "O") {
                    winCountX.innerText = parseInt(winCountX.innerText) + 1;
                } else if (cell1Val === "X") {
                    winCountY.innerText = parseInt(winCountY.innerText) + 1;
                }
                disableBox();
                winnerFound = true;
                bnew
            }
        }
    }
    if(moves === 9 && !winnerFound){
        winCountT.innerText = parseInt(winCountT.innerText) + 1;
        disableBoard();
    }
}

const disableBox = ()=>{
    cells.forEach(cell => {
        cell.style.pointerEvents = "none";
    });
} 

resetGame.addEventListener('click',()=>{
    cells.forEach(cell => {
        cell.innerText = "";
        cell.style.pointerEvents = "auto";
    });
    moves = 0;
    turnO = true;
})

newGame.addEventListener('click', () => {
    countAll.forEach(count => {
        count.innerText = "0"; 
    });
    resetGame.click(); 
});