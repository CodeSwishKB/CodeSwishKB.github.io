import _ from 'lodash';
import './components/styles/style.css'
import logoMama from './components/img/logo.png'

import { homePage } from './jsModules/home';
import { menuPage } from './jsModules/menu';
import { contactPage } from './jsModules/contact';

const resto = (() => {
    const init = () => {
        logo()
        setupTab()
        homePage()
    }

    const logo = () => {
        const header = document.querySelector('header')
        const imgLogo = document.createElement('img')
        imgLogo.src = logoMama;
        imgLogo.className = 'imgLogo';
        header.appendChild(imgLogo)
    }

    const setupTab = () => {
        const homeBtn = document.querySelector('#homeBtn')
        const menuBtn = document.querySelector('#menuBtn')
        const contactBtn = document.querySelector('#contactBtn')

        let navbar = document.querySelector('nav').querySelectorAll('button')
        navbar.forEach(btn => {
            btn.addEventListener('click', function() {
                navbar.forEach(nav => nav.classList.remove('tab-btn-active'))

                this.classList.add('tab-btn-active')
            })
        })

        homeBtn.addEventListener('click', () => {
            console.log('home')
            clearContent()
            homePage()
        })
        
        menuBtn.addEventListener('click', () => {
            console.log('menu')
            clearContent()
            menuPage()
        })
        
        contactBtn.addEventListener('click', () => {
            console.log('contact')
            clearContent()
            contactPage()
        })
    }

    const clearContent = () => {
        const divContent = document.querySelector('#content')
        const pageContent =  document.querySelector('.page-content')

        if(pageContent){
            divContent.removeChild(pageContent)
        }
        
    }

return {init}

})() 

resto.init()

