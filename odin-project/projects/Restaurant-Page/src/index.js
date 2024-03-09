import _ from 'lodash';
import './components/styles/style.css'
import logoMama from './components/img/logo.png'

import { homePage } from './jsModules/home';
import { menu } from './jsModules/menu';

const resto = (() => {
    const homeBtn = document.querySelector('#home')
    const menuBtn = document.querySelector('#menu')
    const contactBtn = document.querySelector('#contact')

    const logo = () => {
        const header = document.querySelector('header')
        const imgLogo = document.createElement('img')
        imgLogo.src = logoMama;
        imgLogo.className = 'imgLogo';
        header.appendChild(imgLogo)
    }

return {logo}

})() 

resto.logo()
// homePage()
menu()