const boxElement=document.querySelectorAll(".box");
var winningcombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
var xAttempts=[];
var oAttempts=[];
var click=0;
var wonTheGame=0;
const message=document.getElementById("message");
const gameresult=document.getElementById("result");
const restart=document.getElementById("button");

boxElement.forEach(box=>{
    console.log(box);
    box.onclick = handleClick;
})

function handleClick(e){
    console.log(e.target);
    console.log(e.target.getAttribute('id'));
    const i=e.target.getAttribute('id');
    const text=document.createElement('p');
    text.setAttribute('id','text');
    boxElement[i-1].appendChild(text);
    console.log(boxElement[i-1]);
    
    if(click%2 == 0){
        xAttempts.push(parseInt(i-1));
        console.log(xAttempts);
        text.innerHTML="X";
        text.style.color = "#FAB201";
        result(winningcombinations,xAttempts,"X");
    }
    else{
        oAttempts.push(parseInt(i-1));
        console.log(oAttempts);
        text.innerHTML="O";
        text.style.color="#FAB201";
        result(winningcombinations,oAttempts,"O");
    }
    click++;
    if(click==9 && wonTheGame==0){
        gameresult.style.visibility="visible";
        message.innerHTML="It's a tie 🤝 ";
    }
}
function result(winningcombinations,attempts,player){
    let flag=0;
    let checker=[];
    for (var i = 0; i < winningcombinations.length; i++) {
        console.log(winningcombinations[i]);
        if (Array.isArray(winningcombinations[i])){
            result(winningcombinations[i],attempts,player);
        }else{
            if(attempts.includes(winningcombinations[i])){
                checker.push(true);
                flag++; 
            }else{
                checker.push(false);
            }
        }
    }
    if (checker.every(check => check === true)&&flag>2){
        gameresult.style.visibility="visible";
        message.innerHTML ="'"+ player +"'" + " Won the game!";  
        wonTheGame=1;
    }
}
restart.onclick=()=>{
    history.go(0);
}