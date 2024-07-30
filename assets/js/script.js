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


