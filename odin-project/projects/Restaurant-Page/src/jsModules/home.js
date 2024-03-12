export function homePage(){
    const divContent = document.querySelector('#content')
    const pageContent = document.createElement('div')
    const elH1 = document.createElement('h1')
    const elP = document.createElement('p')

    elH1.textContent = `Gulay Ni Mama Resto`
    elP.textContent = `Sa pagtataguyod ng kamalayan sa kagandahang kalusugan at sustenableng pamumuhay, binuksan ni Mama ang "Gulay ni Mama" - isang pook ng kasiyahan at kalusugan sa pagkain na nag-aalok ng masarap at masustansyang mga pagpipilian na puno ng sariwang gulay at prutas.
    Sa mundo ng kulinarya, kakaunti lamang ang naghahandog ng ganitong uri ng kusina na binibigyang-pansin ang kahalagahan ng gulay at prutas. Sa "Gulay ni Mama," hindi lamang nilalaman ang isang pagpipilian, kundi nagiging pangunahing bahagi ito ng bawat kainan. Ang bawat kainan ay isang paglalakbay sa mga lasa at karanasan na nagmumula sa kamay ni Mama, na puno ng pagmamahal at pangangalaga sa kalusugan.
    Sa bawat hapag, makikita ang kanyang mga likha, mula sa pinakasimpleng ensalada hanggang sa mga eksklusibong lutuin na puno ng sariwang gulay at prutas. Ang "Gulay ni Mama" ay hindi lamang tungkol sa pagkain; ito rin ay isang lugar kung saan ang pagkain ay isang pagdiriwang at pagtuturo sa kahalagahan ng pag-aalaga sa sarili at kalikasan.
    Sa pamamagitan ng "Gulay ni Mama," ipinapakita namin ang kakayahang magbigay ng masarap at kasiyahang kumain, na hindi kailangang ipagpalit ang kalusugan. Ipinagmamalaki namin ang aming mga pagkaing sariwa at sustansya na nagbibigay-buhay sa bawat bisita, at nagbibigay-diin sa kahalagahan ng pagpapahalaga sa kalusugan at kapaligiran sa bawat pagkain.
    Sa bawat pagtawid sa aming pintuan, tinatanggap namin ang bawat bisita na nag-aasam na makaranas ng kaligayahan at kabusugan sa bawat kagat. Sa "Gulay ni Mama," tayo ay hindi lamang kumakain, tayo ay nagpapalakas, nagpapayaman, at nagbibigay-buhay sa bawat pagsiklab ng lasa at pagpapahalaga. Handa kaming samahan kayo sa inyong paglalakbay tungo sa mas malusog na pamumuhay, isang pagkain sa bawat hakbang.`

    pageContent.className = 'page-content'
    elH1.className = `homeElH1 title`
    elP.className = `homeElP`

    divContent.appendChild(pageContent)
    pageContent.appendChild(elH1)
    pageContent.appendChild(elP)

}