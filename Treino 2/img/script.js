const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};