//alert("helloworld");
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

const log = document.querySelector('#letters')
const guessHolder = document.querySelector('#Guesses');
var inputArray = [];
var wordArray = [];
var counter = false;

createWordBoxes();
//document.addEventListener('keyup', logKey);
var guesses = guessHolder.textContent;

function createWordBoxes() {
    var word = randomWord(); 
    var guesses = word.length + 3;
    for (let i = 0; i < word.length; i++){
        wordArray.push(word[i].toUpperCase());
    }
    guessHolder.textContent = guesses;
    console.log("word array " + wordArray);
    var numberOfBoxes = word.length;
    let ui = document.querySelector("#wordBoxes");
    while (ui.firstChild){
        ui.removeChild(ui.firstChild);
    }
    console.log("word length " + numberOfBoxes);
    for (let i = 0; i < numberOfBoxes; i++){
        
        var li = document.createElement('li');
        let att = document.createAttribute('class');
        let liId = document.createAttribute('id');
        li.textContent += '_';
        att.value = "list-group-item";
        liId.value = i;
        li.setAttributeNode(att);
        li.setAttributeNode(liId);
        ui.appendChild(li);
    }
}

function randomWord(){
    var carArray = ["BMW","Volvo","Honda","Toyota","Ford","Volkswagne","Kia","Mazda","Hyundai"];
    var x = Math.floor(Math.random() * 9);
    //console.log(x);
    console.log(carArray[x]);
    return carArray[x];

}
function GameOver(guessNum){
    if(guessNum == 0){
        if(confirm("Gameover! Play again?")){
            document.location.reload();
        }
    }
}
function YouWin(array1, array2){
    /*if (array1.includes(array2)){
        alert("Win");
    }*/
    let wordBoxArray = [];
    let ui = document.querySelector("#wordBoxes");
    //alert(ui.childNodes.length);
    for (let i = 0; i < ui.childNodes.length; i++){
        if (ui.childNodes[i].nodeName == "LI"){
            wordBoxArray.push(ui.childNodes[i].textContent);
            //console.log("test"+wordBoxArray);
        }
    }
    if (!wordBoxArray.includes("_")){
        var element = document.getElementById("my-canvas");
        element.classList.remove("display0");
        setTimeout(function(){ document.location.reload(); }, 5000);
        //alert("You won the car was" + word);
        /*if(confirm("You won! Play again")){
            document.location.reload();
        }*/
    }
}


document.onkeyup = function (e) {
    var inputLetter = String.fromCharCode(e.keyCode);
    guesses--;
    GameOver(guesses);
    guessHolder.textContent = guesses;
    log.textContent += ` ${inputLetter}`;
    
    //let currentInputLetter = 
    if (wordArray.includes(inputLetter) && inputArray.includes(inputLetter)){
        inputArray.push(inputLetter);
        //alert(inputArray);
        let wordIndex = wordArray.lastIndexOf(inputLetter);
        let liIndex = document.getElementById(wordIndex);
        liIndex.textContent = inputLetter;
        //counter = true;     
    } else if (wordArray.includes(inputLetter)){
        inputArray.push(inputLetter);
        let wordIndex = wordArray.indexOf(inputLetter);
        let liIndex = document.getElementById(wordIndex);
        liIndex.textContent = inputLetter;
    } else{
        //do nothing 
    }
    YouWin(inputArray,wordArray);
        //alert("success");
    console.log("input array "+inputArray);
}