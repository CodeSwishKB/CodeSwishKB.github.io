const box = document.querySelector('.box')
const html = document.querySelector('html')

html.addEventListener('click', function() {
  this.find('body').append('<div class="box">')
})

