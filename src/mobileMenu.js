const menuButton = document.querySelector('#menu-button')

function mobileMenu(menu){

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('visible')
    })

}

export{mobileMenu}