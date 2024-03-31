let text = document.getElementById('title')

let son = (Math.floor(Math.random()*100))

document.body.style.background= 'black'
document.body.style.color= 'red'
document.body.style.height = '90vh'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'

text.style.fontSize = '250px'
let obj ={
    name : son
}
text.innerHTML= obj.name

