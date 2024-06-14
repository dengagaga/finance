const darkTime = document.querySelector('.darkTime')
const body = document.querySelector('.body')

if (localStorage.getItem('darkMode') == 'white') {
    body.classList.remove('body--active')
    if(darkTime) {
        darkTime.classList.remove('darkTime--active')

    }

} else if (localStorage.getItem('darkMode') == 'black'){
    body.classList.add('body--active')
    if(darkTime) {
        darkTime.classList.add('darkTime--active')

    }

}
if(darkTime) {
    darkTime.onclick = () => {
        darkTime.classList.toggle('darkTime--active')
        body.classList.toggle('body--active')
        if (body.classList.contains('body--active')) {
            localStorage.setItem('darkMode', 'black');
        } else {
            localStorage.removeItem('darkMode', 'black');
            localStorage.setItem('darkMode', 'white');
        }
    }
    
}
