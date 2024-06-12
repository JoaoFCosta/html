// Olá, apenas Deus e eu sabiamos como esse código funcionava
// Agora é só Deus
// Obrigado

trocaTema = () => {
  //   const html = document.documentElement;
  // document.querySelector("body").style.background = "Pink";
  document.documentElement.classList.toggle("light");
  const isLight = document.documentElement.classList.contains("light");
  const imagem = isLight ? "./img/perfilClaro.png" : "./img/R.png";
  document.querySelector("#profile img").setAttribute("src", imagem)

  const trocarAlt = isLight ? "Emoji com óculos de sol e sorrindo" : "Emoji com óculos e com os dentes para fora"
  document.querySelector("#profile img").setAttribute("alt", trocarAlt)
};
