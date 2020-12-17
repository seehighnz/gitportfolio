const menuIcon = document.querySelector('.mobile-container');
const mobilebar = document.querySelector('.mobilebar');

menuIcon.addEventListener('click', () => {
    mobilebar.classList.toggle("change");
})