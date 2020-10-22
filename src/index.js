import './js/app.js'
import "./css/style.css"

document.getElementById('pop').addEventListener('click', (e) => {
    e.preventDefault();
    let set = e.currentTarget.closest('.set');
    let button = e.currentTarget;
    let popover = set.querySelector('.popover');
    set.querySelector('.popover').classList.toggle('show')
    set.querySelector('.popover').classList.toggle('hide')    
    popover.style.left = `${button.offsetLeft - ((popover.offsetWidth - button.offsetWidth)/2)}px`
    popover.style.top = `${button.offsetTop - button.offsetWidth / 2}px`    
})

