let btnEl = document.querySelectorAll(".btn");
let rstEl = document.querySelector("#rst");

let turnEl = document.querySelector("#turn");







let disabledbtn = () => {
    for(let btn of btnEl){
        btn.disabled = true;
    };
};

let player = "X";

let reset = () => {
    btnEl.forEach((btn) =>{
        btn.innerText = "";
        btn.disabled = false;
    });
};

rstEl.addEventListener("click", reset);




let winPattern = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

btnEl.forEach((btn)=>{
    turnEl.innerHTML = `Player <span class="x">${player}</span>  Turn`;
    btn.addEventListener("click",()=>{
        btn.innerText = player;
        if(player === "X"){
            btn.innerText = "X";
            btn.style.color = "#e44c39";
            
            player = "O";
            turnEl.innerHTML = `Player <span class="o">${player}</span>  Turn`;
            
        }
        else{
            btn.innerText = "O";
            btn.style.color = "#3598db";
            
            player = "X";
            turnEl.innerHTML = `Player <span class="x">${player}</span> Turn`;
        }
        btn.disabled = true;
        
        checkWinner();
    });
});

let checkWinner = ()=>{
    for(pattern of winPattern){
        let idx1 = btnEl[pattern[0]].innerText;
        let idx2 = btnEl[pattern[1]].innerText;
        let idx3 = btnEl[pattern[2]].innerText;
        
        if(idx1 != "" && idx2 != "" && idx3 != ""){
            if(idx1 === idx2 && idx2 === idx3 ){
                turnEl.innerHTML = `Player <span class="w">${idx1}</span> is winner`
                disabledbtn();
            };
        };

    };
};