const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const closeBtn = document.querySelector('.cart-close')

    const modalOpen = () => {
        cartModal.style.display = 'flex'
    }
    const modalClose = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', () => {
        modalOpen()
    })
    closeBtn.addEventListener('click', () => {
        modalClose()
    })
}

export default cart