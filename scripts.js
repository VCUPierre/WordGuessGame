//alert("helloworld");
createWordBoxes();
const log = document.querySelector('#letters')

document.addEventListener('keyup', logKey);

function createWordBoxes() {
    var word = randomWord(); 
    var numberOfBoxes = word.length;
    let ui = document.querySelector("#wordBoxes");
    while (ui.firstChild){
        ui.removeChild(ui.firstChild);
    }
    console.log("word length " + numberOfBoxes);
    for (let i = 0; i < numberOfBoxes; i++){
        
        let li = document.createElement('li');
        let att = document.createAttribute('class');
        li.textContent += '_';
        att.value = "list-group-item";
        li.setAttributeNode(att);
        ui.appendChild(li);
    }
}

function randomWord(){
    var wordArray = ["BMW","Volvo","Honda","Toyota","Ford","Volkswagne","Kia","Mazda","Hyundai"];
    var x = Math.floor(Math.random() * 9);
    //console.log(x);
    console.log(wordArray[x]);
    return wordArray[x];

}

function logKey(e) {
    var inputLetter = String.fromCharCode(e.keyCode);
    //alert(inputLetter);
    log.textContent += ` ${inputLetter}`;

}