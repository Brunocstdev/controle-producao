const lista = document.querySelector("#lista");
const resumo = document.querySelector("#resumo");
const botaoTv = document.querySelector("#modo-tv");

let aguardando = 0, producao = 0, concluido = 0;
let ordens = [
  { numero: 101, produto: "Eixo de transmissão", quantidade: 200, maquina: "Torno CNC", status: "aguardando" },
  { numero: 102, produto: "Suporte de motor", quantidade: 500, maquina: "Prensa", status: "producao" },
  { numero: 103, produto: "Tampa plástica", quantidade: 1200, maquina: "Injetora", status: "concluido" },
  { numero: 104, produto: "Flange de aço", quantidade: 80, maquina: "Torno CNC", status: "aguardando" }
]

const NOMES = { aguardando: "Aguardando", producao: "Em produção", concluido: "Concluída" }

function criarOP(op) {
    const item = document.createElement("li")
    item.classList.add("op", "status-" + op.status);

    const titulo = document.createElement("h3")
    titulo.textContent = "OP-" + op.numero + " ." + op.produto; 

    const texto = document.createElement ("p")
    texto.textContent = NOMES [op.status] + " - " + op.quantidade + " un. -" + op.maquina;

    item.append(titulo);
    return item;
}

function desenhar (){
    lista.textContent = "";

    ordens.forEach((op) => {
        lista.append(criarOP(op));
        if(op.status === "aguardando") aguardando++;
        if(op.status === "producao") producao++;
        if(op.status === "concluido") concluido++;
     })
     resumo.textContent = ordens.length + " ordens no painel \n" 
     + "Aguardando " + aguardando + "Em produção " + producao + "Concluída " + concluido;
}

botaoTv.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("modo-tv");
    botaoTv.textContent = body.classList.contains("modo-tv") ? "Sair do modo Tv" : "Modo TV";

})
desenhar()  