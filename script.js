let contador = localStorage.getItem("contador") || 0;
document.getElementById("contador").innerText = contador;

function contar() {
  contador++;
  document.getElementById("contador").innerText = contador;

  localStorage.setItem("contador", contador);
}

function mudarCor() {
  const cores = [
    "#ff4757",
    "#1e90ff",
    "#2ed573",
    "#ffa502",
    "#a55eea"
  ];

  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.background = corAleatoria;
}