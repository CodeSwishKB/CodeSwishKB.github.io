import chopseuy from '../components/img/menu/chopsuey.jpg'
import malunggay from '../components/img/menu/maluggay.jpg'
import kalabasa from '../components/img/menu/kalabasa.jpg'
import okraEggplant from '../components/img/menu/orka_eggplant.jpg'
import talbos from '../components/img/menu/talbos.jpg'

export function menuPage(){
    const gulayMenu = [
        {
            name: 'Malunggay Soup',
            imgSrc: malunggay,
            desc: 'Malunggay na masustansya!'
        },
        {
            name: 'Chopseuy',
            imgSrc: chopseuy,
            desc: 'Different kinds of veggies like cabbage, sayote, carrots and more!'
        },
        {
            name: 'Steamed Okra and Talong with bagoong',
            imgSrc: okraEggplant,
            desc: 'Mapapamura ka sa sarap!'
        },
        {
            name: 'Talbos ng Kamote with lots of Canned Sardines',
            imgSrc: talbos,
            desc: 'No comment. Just eat it and enjoy it!'
        },
        {
            name: 'Kalabasa',
            imgSrc: kalabasa,
            desc: 'Masterpiece!'
        },
    ]
    const divContent = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.className = "page-content cardContainer"
    // pageContent.className = "page-content"

    gulayMenu.forEach(item => {
        const card = document.createElement('div')
        const elTitle = document.createElement('h3')
        const elDesc = document.createElement('p')
        const divImg = document.createElement('div')
        const elImg = document.createElement('img')
    
        elTitle.innerHTML = item.name
        elDesc.innerHTML = item.desc
        elImg.src = item.imgSrc

        card.className = 'menuCard'
        elTitle.className = `menuElTitle title`
        divImg.className = 'menuDivImg'
        elDesc.className = 'menuDesc'
        
        divContent.appendChild(pageContent)
        pageContent.appendChild(card)
        card.appendChild(divImg)
        divImg.appendChild(elImg)
        card.appendChild(elTitle)
        card.appendChild(elDesc)
        
    })
}