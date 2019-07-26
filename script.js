let attempt;
let aNumber;

let max;

function resetValues() {
    attempt = 0;
    aNumber = parseInt(Math.random() * max);
    document.querySelector('#levels').classList.remove('showlevels');
    document.querySelector('#levels').classList.add('hidelevels');
}

function easy() {
    max = 100;
    resetValues();
}

function medium() {
    max = 500;
    resetValues();
}

function hard() {
    max = 1000;
    resetValues();
}

function showLevels() {
    document.querySelector('#levels').classList.remove('hidelevels');
    document.querySelector('#levels').classList.add('showlevels');

}

function check() {
    let userNumber = parseInt(document.querySelector("input").value);
    attempt++;
    if (attempt < 11) {
        if (userNumber < aNumber) {
            document.querySelector('#result').innerHTML = "Try Bigger..";
        } else if (userNumber > aNumber) {
            document.querySelector('#result').innerHTML = "Try Smaller..";
        } 
          else if (userNumber == false){
           document.querySelector('#result').innerHTML = "Try your guess by entering any number";
        }
          else {
            document.querySelector('#result').innerHTML = "Congratulations!! You did it in " + attempt + ' times';
        }

    } else {
        alert('You Lost!! Try again')
    }
}
