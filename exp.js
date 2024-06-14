const title1 = document.querySelector('.title-1')
const formBtn = document.querySelector('.form_btn')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const list = document.querySelector('.list')
const item = document.querySelector('.item')
const allPrice = document.querySelector('.all-price')

const date = new Date();
const monthName = date.toLocaleString('default', { month: 'long' });
let todo = []
const LocalMoney = JSON.parse(localStorage.getItem('expens'));
const LocalAllPrice = JSON.parse(localStorage.getItem('allPrice2'));




let initialValue = 0;
function locStHtml() {
    if(localStorage.getItem('expens')) {
       todo = LocalMoney
       LocalMoney.map(l => {
         title1.insertAdjacentHTML('beforeend', `<div class="flex" data-id="${l.id}"><p> <svg class="flex_svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.82154 13.6859 8.10339 12.75 7.84748V11.3167C14.3804 11.6087 15.75 12.8336 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.1785 10.3141 15.8966 11.25 16.1525V12.6833C9.61957 12.3913 8.25 11.1664 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25ZM11.25 7.84748C10.3141 8.10339 9.75 8.82154 9.75 9.5C9.75 10.1785 10.3141 10.8966 11.25 11.1525V7.84748ZM12.75 12.8475V16.1525C13.6859 15.8966 14.25 15.1785 14.25 14.5C14.25 13.8215 13.6859 13.1034 12.75 12.8475Z" fill="#fff"></path> </g></svg> Потратил  за ${l.mounth}: ${l.profit} руб. Потратил  на ${l.description}</p><button class="flex_btn">Удалить</button></div>`) 
       });
       allPrice.innerHTML = `<strong>Расход:</strong> ${LocalAllPrice} руб.`

    } 
}
locStHtml()
formBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const inputValue = input1.value
        const inputValue2 = input2.value
         const val = {
             id: `${todo.length + 1}`,
             profit: `${inputValue}`,
             mounth: `${monthName}`,
             description: `${inputValue2}`
         }
        
         todo.push(val)
         localStorage.setItem('expens', JSON.stringify(todo));
         title1.insertAdjacentHTML('beforeend', `<div class="flex" data-id="${val.id}"><p> <svg class="flex_svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.82154 13.6859 8.10339 12.75 7.84748V11.3167C14.3804 11.6087 15.75 12.8336 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.1785 10.3141 15.8966 11.25 16.1525V12.6833C9.61957 12.3913 8.25 11.1664 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25ZM11.25 7.84748C10.3141 8.10339 9.75 8.82154 9.75 9.5C9.75 10.1785 10.3141 10.8966 11.25 11.1525V7.84748ZM12.75 12.8475V16.1525C13.6859 15.8966 14.25 15.1785 14.25 14.5C14.25 13.8215 13.6859 13.1034 12.75 12.8475Z" fill="#fff"></path> </g></svg> Потратил  за ${monthName}: ${val.profit} руб. Потратил  на ${inputValue2}</p><button class="flex_btn">Удалить</button></div>`) 
         input1.value= ''
         input2.value= ''
    
        let sum = todo.reduce((accumulator, currentValue) => accumulator + +currentValue.profit,initialValue);
        allPrice.innerHTML = `<strong>Расход:</strong> ${sum} руб.`
        localStorage.setItem('allPrice2', sum);
        
        removeLoc()
        
 })


function removeLoc() {
    const flexBtn = document.querySelectorAll('.flex_btn')
    flexBtn.forEach(btn => {
       btn.onclick = (event) => {
           event.target.parentElement.remove();
           const todo2 = todo.filter((word) => word.id == btn.parentElement.dataset.id);
           todo.splice(todo2, 1)
           localStorage.setItem('expens', JSON.stringify(todo));
          
       }
       
    })
    sum =  todo.reduce((accumulator, currentValue) => accumulator + +currentValue.profit,initialValue);
    allPrice.innerHTML = `<strong>Расход:</strong> ${sum} руб.`
    localStorage.setItem('allPrice2', sum);
}
removeLoc()



