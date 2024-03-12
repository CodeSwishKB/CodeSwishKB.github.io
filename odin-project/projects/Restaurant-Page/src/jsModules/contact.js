export function contactPage(){
    const divContent = document.querySelector('#content')
    const pageContent = document.createElement('div')
    const elH1 = document.createElement('h1')
    const elH2 = document.createElement('h2')
    const elP = document.createElement('p')
    const socmedWrap = document.createElement('div')
    const socmedList = document.createElement('ul')
    let socmedIconItems = 
        `<li class="list-items"><a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
         <li class="list-items"><a href="#" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li>
         <li class="list-items"><a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>`
   
    elH1.textContent = "Contact Us"
    elH2.textContent = '350-03843-6969-5309'
    elP.textContent = 'Mon - Fri 10:00AM - 6:00PM'
    socmedList.innerHTML += socmedIconItems

    pageContent.className = `page-content contact-container`
    // pageContent.className = `page-content`
    socmedList.className = 'contact-ul'
    elH1.className = 'mbn'
    elH2.className = 'mbn'
    elP.className = 'mbn'

    divContent.appendChild(pageContent)
    pageContent.appendChild(elH1)
    pageContent.appendChild(elH2)
    pageContent.appendChild(elP)
    pageContent.appendChild(socmedWrap)
    socmedWrap.appendChild(socmedList)
    
}