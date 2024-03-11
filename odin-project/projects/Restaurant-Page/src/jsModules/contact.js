export function contact(){
    const divContent = document.querySelector('#content')
    const elContainer = document.createElement('div')
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

    elContainer.className = `contact-container`
    socmedList.className = 'contact-ul'
    elH1.className = 'mbn'
    elH2.className = 'mbn'
    elP.className = 'mbn'

    divContent.appendChild(elContainer)
    elContainer.appendChild(elH1)
    elContainer.appendChild(elH2)
    elContainer.appendChild(elP)
    elContainer.appendChild(socmedWrap)
    socmedWrap.appendChild(socmedList)
    
}