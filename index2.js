let magicNumber, x;

function createButtons() { 
    x = document.getElementById("noButtons").value;
    magicNumber = Math.floor(Math.random() * x + 1);      
    for (let i = 1; i <= x; ++i) {
        let newBtn = document.createElement('button');
        newBtn.innerText= i;
        newBtn.onclick = function() {
            if (magicNumber == i) {
               document.getElementById("message").innerHTML= "You Won!";
            } else {
                document.getElementById("message").innerHTML= i + " is not the lucky number. Try again!";
            }
            resetGame(); 
        }
        document.getElementById("button-container").appendChild(newBtn);
    }
}

function resetGame() {
    const clearButtons = document.getElementById("button-container");
    while (clearButtons.firstChild) {
        clearButtons.removeChild(clearButtons.lastChild);
    }
}
   