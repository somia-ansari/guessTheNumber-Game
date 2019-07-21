let attempt;
let aNumber;

function easy() {
    attempt = 0;
    aNumber = parseInt(Math.random() * 100);
    document.querySelector('#levels').classList.remove('showlevels');
    document.querySelector('#levels').classList.add('hidelevels');
}

function medium() {
    attempt = 0;
    aNumber = parseInt(Math.random() * 500);
    document.querySelector('#levels').classList.remove('showlevels');
    document.querySelector('#levels').classList.add('hidelevels');
}

function hard() {
    attempt = 0;
    aNumber = parseInt(Math.random() * 1000);
    document.querySelector('#levels').classList.remove('showlevels');
    document.querySelector('#levels').classList.add('hidelevels');
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
        } else {
            document.querySelector('#result').innerHTML = "Congratulations!! You did it in " + attempt + ' times';
        }

    } else {
        alert('You Lost!! Try again')
    }
}