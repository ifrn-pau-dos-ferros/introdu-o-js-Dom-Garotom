const title = document.querySelector("h1");
const paragraph1 = document.querySelectorAll(".paragraph")[0];
const paragraph2 = document.querySelectorAll(".paragraph")[1];
const img = document.querySelector("img");

const updateText = document.querySelectorAll("button")[0];
const updateImg = document.querySelectorAll("button")[1];

updateText.addEventListener("click", () => {
  title.textContent = "De Ponta Delgada: Observação de Baleias e Golfinhos";
  paragraph1.textContent = `Parte numa viagem de 1 dia de observação de baleias a partir de Ponta Delgada e testemunha os mamíferos marinhos dos Açores. 
    Procura baleias minke, golfinhos, tartarugas e muito mais, e aprende sobre o ambiente com o teu guia biólogo marinho.`;
  paragraph2.textContent = `
Começa com um briefing do teu guia, que te explicará a história da observação de baleias nos Açores. Aprende sobre segurança na água, regras de observação e respeito pelos animais.
Parte do porto de Ponta Delgada e navega em direção ao Atlântico. Situados entre Portugal e a América do Norte, os Açores são o lar permanente ou ponto de passagem de mais de um terço das espécies de baleias e golfinhos do mundo.`;

  alert("Os textos foram alterados");
});

updateImg.addEventListener("click", () => {
  const src =
    "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=620,height=400,dpr=1/tour_img/37fc75db52af1566.jpeg";
  img.setAttribute("src", src);

  alert("A imagem foi alterada");
});
