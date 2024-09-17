// // MODAL
// const modal = document.querySelector('.modal')
// const modalTrigger = document.querySelector('#btn-get')
// const modalCloseButton = document.querySelector('.modal_close')
// const openModal = () => {
//     modal.style.display = 'block'
//     document.body.style.overflow = 'hidden'
// }
//
// const closeModal = () => {
//     modal.style.display = 'none'
//     document.body.style.overflow = ''
// }
// modalTrigger.onclick = () => openModal ()
// modalCloseButton.onclick = () => closeModal()
// modal.onclick = (event) => {
//     if (event.target === modal)
//     closeModal()
// }
//
//
// let switchModal = true
//
// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY + window.innerHeight
//     const scrollHeight =document.body.scrollHeight
//     if (scrollPosition >= scrollHeight && switchModal === true){
//         openModal()
//         switchModal = false
//     }
//     window.removeEventListener('scroll', openModal)
//
// })
//
// setTimeout(() => {
//     openModal()},10000)
//
//
//
