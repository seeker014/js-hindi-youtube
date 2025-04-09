# Projects related to DOM

## project link 
[Click Here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```Javascript 
const buttons=document.querySelectorAll('.button);
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