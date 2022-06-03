const buttonElt = document.querySelector('input');
console.log(buttonElt);
buttonElt;addEventListener('click',(e)=> {
    console.log(e.target.value);
})