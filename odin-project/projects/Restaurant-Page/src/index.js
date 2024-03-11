import _ from 'lodash';
import './components/styles/style.css'
import logoMama from './components/img/logo.png'

import { homePage } from './jsModules/home';
import { menu } from './jsModules/menu';
import { contact } from './jsModules/contact';

// const homeBtn = document.querySelector('#home')
// const menuBtn = document.querySelector('#menu')
// const contactBtn = document.querySelector('#contact')

const resto = (() => {
    const logo = () => {
        const header = document.querySelector('header')
        const imgLogo = document.createElement('img')
        imgLogo.src = logoMama;
        imgLogo.className = 'imgLogo';
        header.appendChild(imgLogo)
    }

    const setUpTabs = () =>{
        document.querySelectorAll('.tab-btn').forEach(button => {
            button.addEventListener('click', () => {

            })
        })
    }

return {logo}

})() 

// homeBtn.addEventListener('click', homePage)
// menuBtn.addEventListener('click', menu)
// contactBtn.addEventListener('click', contact)

resto.logo()

