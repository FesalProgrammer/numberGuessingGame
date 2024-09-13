//declare variables
let attempts = 0;
const numMin = 1;
const numMax = 100;

let randomNum = Math.floor(Math.random() * (numMax - numMin + 1) + 1);
console.log("El numero a adivinar es: " + randomNum);

const userInput = document.getElementById("userInput");
const enterInput = document.getElementById("enterInput");
const success = document.getElementById("success");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");
const reset = document.getElementById("reset");

//Adding event listener
enterInput.addEventListener("click", checkInput);

function checkInput(){
  
  const userValue = Number(userInput.value);
  attempts++;

  if (userValue === randomNum) {
    success.textContent = "Felicidades, adivinaste!";
    hint.textContent = "";
  } 
    
    else if ((userValue > randomNum && userValue <= numMax) && (userValue - randomNum <= 2)) {
    hint.textContent = "Estas por encima pero muy caliente!, intenta otra vez";
  }  
    else if ((userValue < randomNum && userValue >= numMin) && (randomNum - userValue <= 2)) {
    hint.textContent = "Estas por debajo pero muy caliente!, intenta otra vez";
  }
  
    else if (userValue > randomNum && userValue <= numMax) {
    hint.textContent = "Estas por encima!, intenta otra vez";
  }

  else if (userValue < randomNum && userValue >= numMin) {
    hint.textContent = "Estas por debajo!, intenta otra vez";
  }
    else {
    hint.textContent = "Entrada invalida";
  }
  

  attemptsText.textContent = "Intentos: " + attempts;
  userInput.value = "";
  reset.addEventListener("click", function(){location.reload()})
}


