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
    results.innerHTML=Please give a valid height ${height};
  }
  else if (weight==='' || weight<0 || isNaN(weight)) {
    results.innerHTML=Please give a valid weight ${weight};
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    // show the result
    results.innerHTML=<span> ${bmi} </span>
  }

})
```