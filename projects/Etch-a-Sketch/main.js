const DEFAULT_SIZE = 16
const GRIDSIDE = 600

let currentSize = DEFAULT_SIZE

const sketch = document.querySelector('.sketch')
const btn = document.querySelector("#btn")

sketch.style.width = sketch.style.height = `${GRIDSIDE}px`

function removeGrid(){
    while(sketch.firstChild){
        sketch.removeChild(sketch.firstChild)
    }
}

function makeFlexRows(square){
    const numOfSquares = (square * square)
    const widthNHeight = `${(GRIDSIDE / square) - 2}px`

    for (i = 0; i < numOfSquares; i++ ){
        let cell = document.createElement('div')
         
        cell.style.width = cell.style.height = widthNHeight
        cell.classList.add('flex-item')
        sketch.appendChild(cell)
        
        sketch.addEventListener('mouseover', addColor)
        sketch.addEventListener('mousedown', addColor)
    }
}


let mouseDown = false
document.body.onmousedown = () => {
    mouseDown = true
}  
document.body.onmouseup = () => {
    mouseDown = false
}

function addDivs(){
    let input = prompt('Enter value of divs (max is 100).', DEFAULT_SIZE)
    while (input >= 100) {
        input = prompt('Max is 100')
    }
    removeGrid()
    makeFlexRows(input)
}

function addColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.classList.add('black')
}

btn.addEventListener('click', addDivs)
