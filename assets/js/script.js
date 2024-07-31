const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Hàm hiển thì form mua vé
function showBuyTickets (){
    modal.classList.add('open')

}
// Gỡ bỏ class open của modal
function hideBuyTickets () {
    modal.classList.remove('open')
}

// Lặp qua thẻ Button và lắng nghe click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets )
}

// Lắng nghe hành vi Button Close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

// xu ly Menu
var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight;


mobileMenu.onclick = function (){
    // Kiem tra thuoc tinh height cua header
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

// Lang nghe su kien cua menu va dong menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    
    menuItem.onclick = function (event) {

        // kiem tra the lien ke va co phai subnav khong
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')

        if (isParentMenu){
           
            event.preventDefault();

            
        }
        else {
             // An menu
            header.style.height = null;
        }
    }
        
}

