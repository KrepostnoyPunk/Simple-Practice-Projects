const toggleMenuBtn=document.querySelector('.toggle-menu-btn');
const toggleMenuBtnIcon=document.querySelector('.toggle-menu-btn i');
const dropDownMenu=document.querySelector('.dropdown-menu');

toggleMenuBtn.addEventListener('click', ()=>{
    dropDownMenu.classList.toggle('open');
    let isOpen=dropDownMenu.classList.contains('open');
    toggleMenuBtnIcon.classList=isOpen?'fa-solid fa-xmark':'fa-solid fa-bars'
})