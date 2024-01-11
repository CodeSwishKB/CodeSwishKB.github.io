const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'color'

const GRIDWIDTH = 600
const GRIDHEIGHT = 600

let currentSize = DEFAULT_SIZE
let currentMode = DEFAULT_MODE

const sketch = document.querySelector('.sketch')
const generateBtn = document.querySelector(".change-btn")
const randBtn = document.querySelector('.random-btn')
const defaultBtn = document.querySelector('.default-btn')

sketch.style.width = `${GRIDWIDTH}px`
sketch.style.height = `${GRIDHEIGHT}px`

makeFlexRows(currentSize)

function setCurrentMode(newMode){
    currentMode = newMode
}

function addColor(e){
    if (e.type === 'mouseover' && !mouseDown) return

    if (currentMode === 'rainbow'){
        e.target.style.backgroundColor = randomColor()
    } else if (currentMode === 'color'){
        e.target.style.backgroundColor = '#000'
    }
}

function removeGrid(){
    while(sketch.firstChild){
        sketch.removeChild(sketch.firstChild)
    }
}

function makeFlexRows(square){
    const numOfSquares = (square * square)
    const width = `${(GRIDWIDTH / square) - 2}px`
    const height = `${(GRIDHEIGHT / square) - 2}px`

    for (i = 0; i < numOfSquares; i++ ){
        let cell = document.createElement('div')
         
        cell.style.width = width
        cell.style.height = height
        cell.classList.add('flex-item')
        sketch.appendChild(cell)

                clickColor(addColor)
         
        }
    
}

function clickColor(color){
    sketch.addEventListener('mouseover', color)
    sketch.addEventListener('mousedown', color)
}

let mouseDown = false
document.body.onmousedown = () => {
    mouseDown = true
}  
document.body.onmouseup = () => {
    mouseDown = false
}

function generateDivs(){
    let input = prompt('Enter value of divs (max is 64).', DEFAULT_SIZE)
    while (input > 64) {
        input = prompt('Max is 64')
    }
    removeGrid()
    makeFlexRows(input)
}

function randomColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    return rgb
}

// randBtn.addEventListener('click', setCurrentMode('rainbow'))
// defaultBtn.addEventListener('click', setCurrentMode('color'))

randBtn.onclick = () => setCurrentMode('rainbow')
defaultBtn.onclick = () => setCurrentMode('color')

generateBtn.addEventListener('click', generateDivs)
