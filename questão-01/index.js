const title = document.querySelector("h1");
const paragraph1 = document.querySelectorAll(".paragraph")[0];
const paragraph2 = document.querySelectorAll(".paragraph")[1];
const items = document.querySelectorAll("li");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log(`
        \nTitulo : ${title.textContent}
        \nParagráfo 01 : ${paragraph1.textContent}
        \nParagráfo 02 : ${paragraph2.textContent}
        \nItem 01 : ${items[0].textContent}
        \nItem 02 : ${items[1].textContent}
        \nItem 03 : ${items[2].textContent}
        `);

    alert('Os elementos dos itens HTML foram printados no console')
});
