const newgamebtn = document.querySelector('#btn');
newgamebtn.style.display = "none";

// newgamebtn.remove(); 

const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector(".guessfield");
const submit = document.querySelector('.submit-guess');
const previous = document.querySelector('.previous');
const remaning = document.querySelector('.remaning');
const loworhi = document.querySelector('.loworhi');

let playgame = true;
let numguess = 1;
let prevguess = [];

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
       
        validateguess(guess);
    })
}
function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if(guess < 1){
        alert('please enter a number more than 1');
    }else if(guess>100){
        alert('please enter a number greater than 100');
    }else{
        prevguess.push(guess);
        displayclean(guess);
        if(numguess === 11){
            displaymessage(`game over! randomnumber was ${randomNumber}`);
            endgame();
        }else{
            // displayclean(guess);
            checkguess(guess);
        }
       
    }
}

function checkguess(guess){
    if(guess === randomNumber){
        displaymessage(`you guesses it right`);
        endgame();
    }else if(guess > randomNumber){ 
            displaymessage( `guess number was too high`);
    }else if(guess < randomNumber){
          displaymessage(`guess number was too low`);
     }
     
    
}
function displayclean(guess){
    userInput.value = '';
    previous.innerHTML += `${guess},`;
    numguess++;
    remaning.innerHTML = `${11 - numguess}`;
}
function displaymessage(message){
    loworhi.innerHTML = `${message}`;
}
function endgame(){
    userInput.disabled = true;
    submit.disabled = true;
    newgamebtn.style.display = "block";
   newgamebtn.addEventListener('click',newgame);
}
function newgame(){
   
        location.reload();
        // const randomNumber = parseInt(Math.random() * 100 + 1);
    //     numguess = 1;
    //     previous.innerHTML='';
    //     remaning.innerHTML = `${11 - numguess}`;
    //     displaymessage(``);
    //    prevguess=[];
    //     userInput.disabled = false;
    //     submit.disabled = false;
    //     newgamebtn.remove(wrapper);
        // playgame= true;

    
}
