# Projects related to DOM

## project link 
[Click Here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```Javascript 
// here we have a button , so its 'click' type event
// addEventListener is function , function(e) where e(event) is any object that is being passed
// e.target means from where we called that event, means from which color button , we clicked.

const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
buttons.forEach(function (button)
{
    button.addEventListener ('click',function(e) {
        if (e.target.id==='grey')
        {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id==='white')
        {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id==='blue')
        {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id==='yellow')
        {
            body.style.backgroundColor = e.target.id;
        }
    })
})

```

## Project 2
``` Javascript
// here there is a form , so we have a 'submit' type event
// height = parseInt(document.querySelector('#height').value) // if we write it outside , this usecase will give empty value since after clicking "calculate" button which is treated as 'submit' , we get a fixed value , before that it is empty

const form = document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault(); //form gets submitted to url or server , so stop it since we don't need to go to server

  const height = parseInt(document.querySelector('#height').value); //.value se string value milega , parseInt karke integer me change krlo

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height==='' || height<0 || isNaN(height)) {
    results.innerHTML=`Please give a valid height ${height}`;
  }
  else if (weight==='' || weight<0 || isNaN(weight)) {
    results.innerHTML=`Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    // show the result
    results.innerHTML=`<span> ${bmi} </span>`
  }

})
```

## Project 3
``` Javascript
const clock=document.getElementById ('clock')
//const clock=document.querySelector('#clock')

let date=new Date();
console.log(date.toLocaleString());
// this is printing date once , we need digital clock that changes every second
//below 1000 is time interval in ms
setInterval(function(){
  let date=new Date()
  //console.log(date.toLocaleString()); //prints continuously in console
  clock.innerHTML=date.toLocaleString();
},1000) //prints inside clock element

```

## Project 4
``` Javascript
let num = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;

if (playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
//checks if value is bw 1 to 100
  if (isNaN(guess))
  {
    alert('Please enter a valid number');
  }
  else if (guess<1)
  {
    alert('Please enter a number more than 1');
  }
  else if (guess>100)
  {
    alert('Please enter a number less than 100');
  }
  else
  {
    prevGuess.push(guess);
    if (numGuess===10){
      displayGuess(guess);
      displayMessage(`Game over . Random number was ${num}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
//if value is equal,low or high
  if (guess===num)
  {
    displayMessage(`You guessed it right`);
    endGame();
  }
  else if (guess<num)
  {
    displayMessage(`Number is too low`);
  }
  else
  {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess){
// just shows guesses that user makes and remaining guesses
 userInput.value=''
 guessSlot.innerHTML+=`${guess}  |   `
 numGuess++;
 remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
 lowOrHi.innerHTML=`<h2> ${message} </h2>`
} //lowOrHi was just a paragraph tag to display msg

function endGame(){
 userInput.value=''
 userInput.setAttribute('disabled','');
 // we had created element p , we added a button (start new game) in it , and added it to startOver wala paragraph.
 p.classList.add('button')
 p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`
 startOver.appendChild(p);
 playGame=false;
 newGame();
}

function newGame(){
  const newGamebutton = document.querySelector('#newGame');
  //reset all variables to start game again
  newGamebutton.addEventListener('click',function(e){
    num=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML=''
    remaining.innerHTML=10
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  })
}

```

## Project 5

```Javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>

  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' ' ? 'Space':e.key}</td>   
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
  </div>
  `;

});

```

## Project 6

``` Javascript
//generate a random color

const randomcolor=function(){
  const hex="0123456789ABCDEF" //16 positions
  let color='#'
  for (let i=0;i<6;i++) //6 is length of color hexcode
  {
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}

let intervalID;
const startChangingColor=function(){
  
  if (!intervalID){
  intervalID=setInterval(changeBGcolor,1000);
  }

  function changeBGcolor(){
  document.body.style.backgroundColor=randomcolor();
  }
}

const stopChangingColor=function(){
  clearInterval(intervalID);
  intervalID=null;  //clear value of variable
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)

```

