import _ from 'lodash'
// import myName from './myName'
import printMe from './print'

if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!')
}

function component(){
    const element = document.createElement('div')
    const btn = document.createElement('button')


    element.innerHTML = _.join(['Hello', 'webpack'], '  ')
    // element.textContent = myName('Uyang')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)

    return element 
}

document.body.appendChild(component())