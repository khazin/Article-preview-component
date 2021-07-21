const btnForward = document.querySelector('#btnForward');
const footer = document.querySelector('.footer');
btnForward.addEventListener('click', (e) => {
footer.classList.toggle('_active');
})