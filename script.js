let attempt = 0;
let aNumber = parseInt(Math.random() * 100);

function checkEasy(){
    attempt++;
let userNumber = parseInt(document.querySelector('input').value);
if (aNumber > userNumber) {
    alert("Too small!!");
}
else if(aNumber < userNumber){
    alert("Too big!!");
}
else{
    alert('Congratulations!! You did it in '+ attempt + ' times');
}
}
function checkMedium(){
    attempt++;
let userNumber = parseInt(document.querySelector('input').value);
if (aNumber > userNumber) {
    alert("Too small!!");
}
else if(aNumber < userNumber){
    alert("Too big!!");
}
else{
    alert('Congratulations!! You did it in '+ attempt + ' times');
}
}
function checkHard(){
    attempt++;
let userNumber = parseInt(document.querySelector('input').value);
if (aNumber > userNumber) {
    alert("Too small!!");
}
else if(aNumber < userNumber){
    alert("Too big!!");
}
else{
    alert('Congratulations!! You did it in '+ attempt + ' times');
}
}