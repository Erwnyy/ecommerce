// MENU SHOWW

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


// NAV LINK UNTUK MENYEMBUNYIKAN KETIKA NAVBAR DIKLIK AKAN MENUTUP MENU NAVBAR

const navLink = document.querySelectorAll('.nav_link'),
    navMenu = document.getElementById('nav-menu')

function linkAction() {
    navMenu.classList.remove('showa')
}

navLink.forEach(n => n.addEventListener('click', linkAction));