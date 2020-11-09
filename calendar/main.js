const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');


select.onchange = function(){
    const choice = select.value;

    let days = 0;

    if(
        choice === 'janeiro' ||
        choice === 'marco' || 
        choice === 'maio' ||
        choice === 'julho' ||
        choice === 'agosto' ||
        choice === 'outubro' ||
        choice === 'dezembro'
        ){
            days = 31;
    } else if(choice === 'fevereiro'){
        days = 28;
    } else{
        days = 30;
    }
     
    createCalendar(choice, days);
}

function createCalendar(choice, days){
    list.innerHTML = '';
    h1.textContent = choice;
    for(let i = 1; i <= days; i++){
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar('Janeiro', 31);