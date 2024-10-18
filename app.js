// 1
let text = document.getElementById('text')
//2
let button = document.getElementById('button')

button.addEventListener('click', () => {
    alert('Hello!')

});
//3
const colorbox = document.getElementById('colorbox');
const colorbutton = document.getElementById('colorbutton');
colorbutton.addEventListener('click', () => {

 if (colorbox.style.backgroundColor == 'lightblue') {
    colorbox.style.backgroundColor = 'blue';
 }
 else {
    colorbox.style.backgroundColor = 'lightblue';
 }
});
//4
let text2 = document.querySelector('.text2');
let change2 = document.getElementById('change2');

change2.addEventListener('click', ()=> {
    text2.textContent = 'Vaqif'
})

//5
let message = document.querySelectorAll('.message');
let multiple = document.getElementById('multiple');

multiple.addEventListener('click', ()=> {
    for (let i = 0; i < message.length; i++) {
        message[i].textContent = 'Changed'
      }
});

//6

const textInput = document.getElementById('textinput');
textInput.addEventListener('keyup', (event) => {
 console.log('Sen yazdin :', event.target.value);
});

//7
let p = document.querySelector('.p')
let pbtn = document.getElementById('pbtn')

pbtn.addEventListener('click', ()=> {
  

    if (p.style.opacity == '0') {
        p.style.opacity = '1';
    }
    else {
        p.style.opacity = '0';
    }
})
//8
let colordiv  = document.querySelectorAll('.colordiv');
let changecolor = document.getElementById('changecolor');

changecolor.addEventListener('click', ()=> {
    for (let i = 0; i < colordiv.length; i++) {
        colordiv[i].style.backgroundColor = 'green';
      }
});
//9
let Horray = document.getElementById('Horray')
  Horray.onclick = function(event) {
    if (event.ctrlKey && event.shiftKey) {
      alert('Hooray!');
    }
  };

// 10 
function myfunction() {
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Please write number between 1 and 10. ";
    } else {
      text = "You are group one";
    }
    document.getElementById("demo").innerHTML = text;
  }