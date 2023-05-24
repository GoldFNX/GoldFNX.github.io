const control = document.querySelectorAll('.control');
let currentItem = 1
const item = document.querySelectorAll('.item');
const maxItem = item.length

const mudartheme = document.querySelector('#theme-toggle');
const theme = document.querySelector('.fundo');

// getElementById()
mudartheme.addEventListener('click', () => {
  theme.classList.toggle('dark-mode');
  mudartheme.classList.toggle('dark-mode');
});



// // Passar imagem do carrocel sozinho

// setInterval(() => {
//     item.forEach(item => item.classList.remove('current-item'))
//     currentItem++
    
//     if (currentItem >= maxItem - 1) {
//         currentItem = 1
//     } else if (currentItem < 1) {
//         currentItem = maxItem - 2
//     }

//     item[currentItem].scrollIntoView({
//         block: "nearest",
//         inline: "center",
//         behaviour: "smooth",
//     })
//     item[currentItem].classList.add('current-item');
// }, 2000);

// window.addEventListener('beforeunload', function (event) {
//     event.preventDefault();
//     event.returnValue = '';
//     alert('Tem certeza que quer nos deixar? sentiremos sua falta.');
//   });




// Passar Imagem no CLick

control.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('left')
        if(isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        // item[(currentItem % maxItem + maxItem) % maxItem]

        if (currentItem >= maxItem - 1) {
            currentItem = 1
        } else if (currentItem < 1) {
            currentItem = maxItem - 2
        }

        item.forEach(item => item.classList.remove('current-item'))

        item[currentItem].scrollIntoView({
            block: "nearest",
            inline: "center",
            behaviour: "smooth",
        })

        item[currentItem].classList.add('current-item');
    })
})

// Altera o Icone do Menu

const boxes = document.querySelectorAll('.box svg')

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        boxes.forEach((box) => {
            box.style.fill = 'black';
            box.style.width = 25;
            box.style.height = 25;
        })
        box.style.fill = 'white';
        box.style.width = 20;
        box.style.height = 20;
    })
})  

// seila

const icone = document.querySelector('.dark svg')

let isClick2 = false

icone.addEventListener('click', () => {
    if (!isClick2) {
    icone.style.fill = '#dadada'
    isClick2 = true
    } else {
    icone.style.fill = 'black'
    isClick2 = false
    }

});


//oculta menu

const seta = document.querySelector('.seta')
const menu = document.querySelector('.menu')

let isClick = false

seta.addEventListener('click', () => {
    if (!isClick) {
    menu.style.display = "flex"
    setTimeout(() => {
    menu.style.opacity = 1
    }, 1)
    isClick = true
    } else {
    menu.style.opacity = 0
    setTimeout(() => {
    menu.style.display = "none"
    }, 500)
    isClick = false
    }

});


// Altera icone do menu com o Scroll


let total = 0

if (document.body.scrollHeight <= 2500) {
    total = 1735
} else {
    total = 2100
}

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || window.scrollY;
    
  if(scrollTop >= 0  && scrollTop <= (total / 100) * 21.9) {
    boxes.forEach((box) => {
        box.style.fill = 'black';
        box.style.width = 25;
        box.style.height = 25;
    })
    boxes[0].style.fill = 'white';
    boxes[0].style.width = 20;
    boxes[0].style.height = 20;

  } else if (scrollTop <= (total / 100) * 52.86 ) {

    boxes.forEach((box) => {
        box.style.fill = 'black';
        box.style.width = 25;
        box.style.height = 25;
    })
    boxes[1].style.fill = 'white';
    boxes[1].style.width = 20;
    boxes[1].style.height = 20;

  } else if (scrollTop <= (total / 100) * 80.32 ) {

    boxes.forEach((box) => {
        box.style.fill = 'black';
        box.style.width = 25;
        box.style.height = 25;
    })
    boxes[2].style.fill = 'white';
    boxes[2].style.width = 20;
    boxes[2].style.height = 20;

  } else {

    boxes.forEach((box) => {
        box.style.fill = 'black';
        box.style.width = 25;
        box.style.height = 25;
    })
    boxes[3].style.fill = 'white';
    boxes[3].style.width = 20;
    boxes[3].style.height = 20;
  }

});

const content = document.querySelectorAll('.content')
const botao = document.querySelector('.envio')


const objeto = {}



// function hadleSubmit(event) {
// //     event.preventDefault();
// //     const destinatario = 'alexamenic@gmail.com';
// //     const assunto = objeto.nome;
// //     const corpo = 'Email:' + objeto.email + '\n' + 'Telefone:' + objeto.numero + '\n' + 'Mensagem:' + objeto.mensagem;
  
// //     const link = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

// //     window.location.href = link;
// // }

// event.preventDefault();

// console.log(event)


botao.addEventListener('click', () => {
    objeto.nome = content[0].value
    objeto.email = content[1].value
    objeto.numero = content[2].value
    objeto.mensagem = content[3].value
    
    const destinatario = 'alexamenic@gmail.com'
    const assunto = objeto.nome;
    const corpo = 'Email: ' + objeto.email + '\n' + 'Telefone: ' + objeto.numero + '\n' + 'Mensagem:' + objeto.mensagem;
  
    const link = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpo);
    botao.href = link
});

const duda = document.querySelector('.dudateste')
const dudaimg = document.querySelector('.dudateste img')

item.forEach((item) => {
item.addEventListener('click', () => {
    duda.style.display = "flex"
    dudaimg.src = item.src
    console.log(2)
})
});

duda.addEventListener('click', () => {
    duda.style.display = 'none'
})