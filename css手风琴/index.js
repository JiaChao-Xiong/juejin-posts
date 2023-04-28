let items = document.querySelectorAll('.item')
let icons = document.querySelectorAll('i')

function setActive() {
    items.forEach(item => {
        item.classList.remove('active');
    })
    icons.forEach(icon => {
        icon.classList.remove('fa-fade') 
    })
    let icon = this.getElementsByTagName("i");
    console.log(icon[0]);
    icon[0].classList.add('fa-fade')
    this.classList.add('active');
}
items.forEach(item => {
    item.addEventListener('click', setActive)
})