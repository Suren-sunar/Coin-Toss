const imgDiv = document.querySelector(".img-div");
function flipCoin() {
    imgDiv.classList.add("spin");
    setTimeout(()=>{
imgDiv.classList.remove("spin")
    },1000)
    const result = Math.floor(Math.random() * 2) + 1;
    const resultDisplay = document.getElementById("result");
    
    setTimeout(()=>{
        showRes(result)
    },2000)
   
}


function showRes(result){
clearInterval()
    if (result === 1) {
        // resultDisplay.innerHTML ="Head";
        imgDiv.src=`./img/head.png`;
    } else if (result === 2) {
        // resultDisplay.innerHTML ="Tail";
        imgDiv.src=`./img/tail.png`;
    }
}