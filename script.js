const control = document.querySelectorAll('.control');
let currentItem = 1
const item = document.querySelectorAll('.item');
const maxItem = item.length

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

// Altera icone do menu com o Scroll

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || window.scrollY;
  if(scrollTop >= 0  && scrollTop <= 385) {
    boxes.forEach((box) => {
        box.style.fill = 'black';
        box.style.width = 25;
        box.style.height = 25;
    })
    boxes[0].style.fill = 'white';
    boxes[0].style.width = 20;
    boxes[0].style.height = 20;
  } else if (scrollTop <= 1100) {
    boxes.forEach((box) => {
        box.style.fill = 'black';
        box.style.width = 25;
        box.style.height = 25;
    })
    boxes[1].style.fill = 'white';
    boxes[1].style.width = 20;
    boxes[1].style.height = 20;
  } else if (scrollTop <= 1845) {
    boxes.forEach((box) => {
        box.style.fill = 'black';
        box.style.width = 25;
        box.style.height = 25;
    })
    boxes[3].style.fill = 'white';
    boxes[3].style.width = 20;
    boxes[3].style.height = 20;
  } else if (scrollTop >= 1846) {
    boxes.forEach((box) => {
        box.style.fill = 'black';
        box.style.width = 25;
        box.style.height = 25;
    })
    boxes[4].style.fill = 'white';
    boxes[4].style.width = 20;
    boxes[4].style.height = 20;
  }
  console.log(scrollTop);
});