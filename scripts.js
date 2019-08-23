//alert("helloworld");
const log = document.querySelector('#letters')
const guessHolder = document.querySelector('#Guesses');
var inputArray = [];
var wordArray = [];
var guesses = 15;

createWordBoxes();
guessHolder.textContent = guesses;
document.addEventListener('keyup', logKey);

function createWordBoxes() {
    var word = randomWord(); 
    for (let i = 0; i < word.length; i++){
        wordArray.push(word[i]);
    }
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

function logKey(e) {
    var inputLetter = String.fromCharCode(e.keyCode);
    //alert(inputLetter);
    log.textContent += ` ${inputLetter}`;
    inputArray.push(inputLetter);
    //let currentInputLetter = 
    if (wordArray.includes(inputLetter)){
        alert(inputArray);
        let wordIndex = wordArray.indexOf(inputLetter);
        let liIndex = document.getElementById(wordIndex);
        liIndex.textContent = inputLetter;
        
        //alert("success");
    }
    guesses--;
    guessHolder.textContent = guesses;
    console.log("input array "+inputArray);
}