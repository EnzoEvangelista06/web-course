const paragrafos = document.querySelectorAll('.paragrafos p');
const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

for (let item of paragrafos) {
    item.style.backgroundColor = backgroundBody;
}
