const LocalAllPrice = JSON.parse(localStorage.getItem('allPrice'));
const LocalAllPrice2 = JSON.parse(localStorage.getItem('allPrice2'));
const date = new Date();
const monthName = date.toLocaleString('default', { month: 'long' });
const allPrice = document.querySelector('.circle_text-2')
const allPrice2 = document.querySelector('.circle_text-3')

if(localStorage.getItem('allPrice')) {
    allPrice.innerHTML = `Заработал за ${monthName}: ${LocalAllPrice} руб.`
}
if(localStorage.getItem('allPrice2')) {
    allPrice2.innerHTML = `Потратил за ${monthName}: ${LocalAllPrice2} руб.`
}
