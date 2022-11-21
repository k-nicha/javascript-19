const buttonElement = document.getElementById('test')
console.log(buttonElement)

function changeText() {
  // event handler

  const paragraph = document.getElementById('text')
  paragraph.innerText = paragraph.innerText + " Koco"
}

function createText () {
  const span = document.createElement('span');
  if (!document.getElementById('dynamicSpan')) {
    span.innerText = 'Nica'
    span.id = 'dynamicSpan'
    document.body.appendChild(span)
  }
}

function deleteElement () {
  const span = document.getElementById('dynamicSpan')
  if (span) {
    document.body.removeChild(span)
  }
}

buttonElement.style = "color: blue"
// onclick event
buttonElement.onclick = () => {
  changeText()
  createText()
};



