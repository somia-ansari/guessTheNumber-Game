let aNumber = parseInt(Math.random() * 100);
let attempt = 0;

function check() {
    let userNumber = parseInt(document.querySelector("input").value);
    attempt++;
    if (userNumber < aNumber) {
        document.querySelector('#result').innerHTML = "Too small..";
    } else if (userNumber > aNumber) {
        document.querySelector('#result').innerHTML = "Too big..";
    } else {
        document.querySelector('#result').innerHTML = "Congratulations!! You did it in " + attempt + ' times';
    }
}