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
const LocalMoney = JSON.parse(localStorage.getItem('todo'));
const LocalAllPrice = JSON.parse(localStorage.getItem('allPrice'));

let initialValue = 0;
function locStHtml() {
    if(localStorage.getItem('todo')) {
       todo = LocalMoney
       LocalMoney.map(l => {
         title1.insertAdjacentHTML('beforeend', `<div class="flex" data-id="${l.id}"><p>Заработал за ${l.mounth}: ${l.profit} руб. Заработал на ${l.description}</p><button class="flex_btn">Удалить</button></div>`) 
       });
       allPrice.innerHTML = `<strong>Доход:</strong> ${LocalAllPrice} руб.`

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
         localStorage.setItem('todo', JSON.stringify(todo));
         title1.insertAdjacentHTML('beforeend', `<div class="flex" data-id="${val.id}"><p>Заработал за ${monthName}: ${val.profit} руб. Заработал на ${inputValue2}</p><button class="flex_btn">Удалить</button></div>`) 
         input1.value= ''
         input2.value= ''
    
        let sum = todo.reduce((accumulator, currentValue) => accumulator + +currentValue.profit,initialValue);
        allPrice.innerHTML = `<strong>Доход:</strong> ${sum} руб.`
        localStorage.setItem('allPrice', sum);
        
        removeLoc()
        
 })


function removeLoc() {
    const flexBtn = document.querySelectorAll('.flex_btn')
    flexBtn.forEach(btn => {
       btn.onclick = (event) => {
           event.target.parentElement.remove();
           const todo2 = todo.filter((word) => word.id == btn.parentElement.dataset.id);
           todo.splice(todo2, 1)
           localStorage.setItem('todo', JSON.stringify(todo));
          
       }
       
    })
    sum =  todo.reduce((accumulator, currentValue) => accumulator + +currentValue.profit,initialValue);
    allPrice.innerHTML = `<strong>Доход:</strong> ${sum} руб.`
    localStorage.setItem('allPrice', sum);
}
removeLoc()


































// if(localStorage.getItem('todo')) {
//     LocalMoney.forEach(l => {
//         const val = {
//             id: `${todo.length + 1}`,
//             profit: `${l.profit}`,
//             balance: 10000,
//             mounth: `${monthName}`,
//               description: `${l.description}`
//         }

//         todo.push(val)
//         title1.insertAdjacentHTML('beforeend', `<div class="flex" data-id="${todo.length}"><p>Заработал за ${monthName}: ${l.profit} руб. Заработал на ${l.description} </p><button class="flex_btn">Удалить</button></div>`)
       
//         const flexBtn = document.querySelectorAll('.flex_btn')
        
//         flexBtn.forEach(btn => {
//             btn.onclick = () => {
//              LocalMoney.forEach(l => {
//                 if (l.id == btn.parentElement.dataset.id) {
//                     // btn.parentElement.style.display = 'none'
                    
                    
//                 }
//              })
            
//         }
//     })
        
//     })
//     let sum = todo.reduce((accumulator, currentValue) => accumulator + +currentValue.profit,initialValue);
//     allPrice.innerHTML = `<strong>Доход:</strong> ${sum} руб.`
    
// }


// formBtn.addEventListener('click', (e) => {
//    e.preventDefault()
//    const inputValue = input1.value
//    const inputValue2 = input2.value
//     const val = {
//         id: `${todo.length + 1}`,
//         profit: `${inputValue}`,
//         balance: 10000,
//         mounth: `${monthName}`,
//         description: `${inputValue2}`
//     }
//     todo.push(val)
//     localStorage.setItem('todo', JSON.stringify(todo));
//     title1.insertAdjacentHTML('beforeend', `<p>Заработал за ${monthName}: ${val.profit} руб. Заработал на ${inputValue2}</p>`) 
//     input1.value= ''
//     input2.value= ''

//     let sum = todo.reduce((accumulator, currentValue) => accumulator + +currentValue.profit,initialValue);
//     allPrice.innerHTML = `<strong>Доход:</strong> ${sum} руб.`

   
// })






