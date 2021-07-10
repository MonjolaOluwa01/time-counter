let lowerCount = document.getElementsByClassName('decrease')[0];

let addCount = document.getElementsByClassName('increase')[0];

let counterValue = document.getElementsByClassName('counterValue')[0];

let counter=0;

lowerCount.addEventListener('click', () => {
    if (counter <=0) return
    counter--;
     counterValue.innerText=counter;});

addCount.addEventListener('click', () => {
    if (counter ===50) return
    counter++;
    counterValue.innerText=counter;});
