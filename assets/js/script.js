const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
        
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}  


// shop button
const cartButton = document.querySelectorAll('.cart-button');
cartButton.forEach(button => {
    button.addEventListener('click', cartClick);
});

function cartClick() {
    let button = this;
    button.classList.add('clicked');
}
