const selectors = {
    box: document.querySelector('#counter'),
    btnDecrement: document.querySelector('#counter button[data-action="decrement"]'),
    counterValue: document.querySelector("#value").innerHTML,
    btnIncrement: document.querySelector('#counter button[data-action="increment"]'),
};


selectors.btnDecrement.addEventListener('click', handlerDecrement);
selectors.btnIncrement.addEventListener('click', handlerIncrement);

let clickDec = 0;
let clickInc = 0

function handlerDecrement(){
    clickDec -= 1;
    document.querySelector('#value').innerHTML = clickDec;
    console.log((selectors.counterValue = `${clickDec}`));
}


function handlerIncrement() {
    clickInc += 1;
    document.querySelector('#value').innerHTML = clickInc;
    console.log((selectors.counterValue = `${clickInc}`));
}