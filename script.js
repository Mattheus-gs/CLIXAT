

let listaclients = []
let resultado = ""

 function teste(){
    listaclients = listaclients = [
  {
    nome: "João Silva",
    pontoInicial: "Centro",
    distancia: 8,
    valor: 32.00,
    dsemana: "Segunda, Quarta e Sexta"
  },
  {
    nome: "Maria Oliveira",
    pontoInicial: "Bairro América",
    distancia: 15,
    valor: 55.50,
    dsemana: "Terça e Quinta"
  },
  {
    nome: "Carlos Souza",
    pontoInicial: "Anita Garibaldi",
    distancia: 22,
    valor: 78.00,
    dsemana: "Segunda a Sexta"
  },
  {
    nome: "Fernanda Costa",
    pontoInicial: "Iririú",
    distancia: 5,
    valor: 22.00,
    dsemana: "Sábado"
  },
  {
    nome: "Lucas Pereira",
    pontoInicial: "Boa Vista",
    distancia: 12,
    valor: 45.00,
    dsemana: "Domingo"
  }
]
limpaTudo()
    salvando()
 }

function enviar(){
    let nomesimples = document.getElementById("1").value
    nomesimples = nomesimples.toLowerCase()
     let dias = [];

    if(document.getElementById("Segunda").checked){
        dias.push("Segunda");
    }

    if(document.getElementById("Terca").checked){
        dias.push("Terça");
    }

    if(document.getElementById("Quarta").checked){
        dias.push("Quarta");
    }

    if(document.getElementById("Quinta").checked){
        dias.push("Quinta");
    }

    if(document.getElementById("Sexta").checked){
        dias.push("Sexta");
    }
    
    let clientebase = {
       
        nome:nomesimples,
        pontoInicial: document.getElementById("2").value,
        distancia:document.getElementById("3").value,
        valor: Number(document.getElementById("4").value),
        dsemana: dias.join(", "),
        id: Date.now(),
}
    
    listaclients.push(clientebase)

   let valorcadastro
   
for(let i = 0; i < listaclients.length;i++){
    let nomecadastro = listaclients[i].nome
        nomecadastro = nomecadastro.toLowerCase()
    valorcadastro = listaclients[i].valor.toFixed(2).replace(".",",")
    
        resultado = `<div class="card-cliente">
                <hr>
                <h2>Nome: ${nomecadastro}</h2>
                <p>Ponto de partida: ${listaclients[i].pontoInicial}</p>
                <p>distancia da corrida: ${listaclients[i].distancia} Km(s)</p>
                <p>Valor: R$ ${valorcadastro} </p>
                <p>Dia(s) da semana: ${listaclients[i].dsemana} </p>
                </div>
                `
        }
    
    document.getElementById("resultado").innerHTML += resultado
        limpaTudo()
        salvando()
}
function pesq(){
    let nomepesq = document.getElementById("1").value
    nomepesq = nomepesq.toLowerCase()
    for(let i = 0; i< listaclients.length;i++){
        if(nomepesq == listaclients[i].nome){
            document.getElementById("2").value = listaclients[i].pontoInicial
            document.getElementById("3").value = listaclients[i].distancia
            document.getElementById("4").value = listaclients[i].valor
            document.getElementById("5").value = listaclients[i].id
        }
    }
}

function apagar(){
    let id = document.getElementById("5").value
    for(let i = 0; i < listaclients.length;i++){
        if(id == listaclients[i].id){
            listaclients.splice(i,1)     
        }
    } 
    let apagar
    resultado = ""
    for(let i = 0; i < listaclients.length;i++){
       apagar = listaclients[i].valor.toFixed(2).replace(".",",")
    
         resultado = `<div class="card-dino">
                <hr>
                <h2>Nome: ${listaclients[i].nome}</h2>
                <p>Ponto inicial da corrida: ${listaclients[i].pontoInicial} m</p>
                <p>distancia da corrida: ${listaclients[i].distancia} </p>
                <p>Valor: R$ ${apagar} </p>
                <p>Dia(s) da semana: ${listaclients[i].dsemana} </p>
                </div>
                `
    }

document.getElementById("resultado").innerHTML = resultado 
limpaTudo()
salvando()
}


function limpaTudo(){
    document.getElementById("1").value = ""
   document.getElementById("2").value = ""
   document.getElementById("3").value = ""
   document.getElementById("4").value =  ""
   document.getElementById("5").value =  ""
}

function altcliente(){
    let alterar = document.getElementById("5").value
    let alt2 = document.getElementById("2").value 
   let alt3 = document.getElementById("3").value 
   let alt4 = Number(document.getElementById("4").value)
  let dias = [];

    if(document.getElementById("Segunda").checked){
        dias.push("Segunda");
    }

    if(document.getElementById("Terca").checked){
        dias.push("Terça");
    }

    if(document.getElementById("Quarta").checked){
        dias.push("Quarta");
    }

    if(document.getElementById("Quinta").checked){
        dias.push("Quinta");
    }

    if(document.getElementById("Sexta").checked){
        dias.push("Sexta");
    }
   let alterar2
    for(let i = 0; i < listaclients.length;i++){
        if(alterar == listaclients[i].id){
            listaclients[i].pontoInicial = alt2 
            listaclients[i].distancia = alt3   
            listaclients[i].valor = alt4
            listaclients[i].dsemana = dias.join(", ")      
        }
    } 
    resultado = ''
    for(let i = 0; i < listaclients.length;i++){
        let nomecadastro = listaclients[i].nome
        nomecadastro = nomecadastro.toLowerCase()
         alterar2 = Number(listaclients[i].valor).toFixed(2).replace(".", ",");
    
         resultado = `<div class="card-cliente">
                <hr>
                <h2>Nome: ${nomecadastro}</h2>
                <p>Ponto de partida: ${listaclients[i].pontoInicial}</p>
                <p>distancia da corrida: ${listaclients[i].distancia} Km(s)</p>
                <p>Valor: R$ ${alterar2} </p>
                <p>Dia(s) da semana: ${listaclients[i].dsemana} </p>
                </div>
                `
    }
    document.getElementById("resultado").innerHTML = resultado 
limpaTudo()
salvando()
}

function salvando(){
    localStorage.setItem('listaclients',JSON.stringify(listaclients))
}

function carregar(){
    let leitura = localStorage.getItem('listaclients')
    let dinossalvos = JSON.parse(leitura)
    listaclients = dinossalvos
    let carregar1
    if(carregar1 == null){
            document.getElementById("resultado").innerHTML = "Voce não tem clientes cadastrados no momento."
        }

    resultado = ""
    for(let i = 0; i < listaclients.length;i++){
         let nomecadastro = listaclients[i].nome
            nomecadastro = nomecadastro.toLowerCase()
         carregar1 = listaclients[i].valor.toFixed(2).replace(".",",")
       
        
         resultado += `<div class="card-cliente">
                <hr>
                <h2>Nome: ${nomecadastro}</h2>
                <p>Ponto de partida: ${listaclients[i].pontoInicial}</p>
                <p>distancia da corrida: ${listaclients[i].distancia} Km(s)</p>
                <p>Valor: R$ ${carregar1} </p>
                <p>Dia(s) da semana: ${listaclients[i].dsemana} </p>
                </div>
                `
    }
    document.getElementById("resultado").innerHTML = resultado 

    
}


//DIFERENCIAL 


function enviarzap(){
    let copia

    if (listaclients.length === 0) {
        alert("Não existe clientes cadastrados.");
        return;
    }
    copia = ''
    listaclients.forEach((listaclients,indice) => {
        copia += ` ${indice+1}° cliente
        Nome: ${listaclients.nome}
        Ponto Inicial: ${listaclients.pontoInicial}
        Distância: ${listaclients.distancia}
        Valor: R$ ${listaclients.valor.toFixed(2)}
        Dia: ${listaclients.dsemana}
        -----------------------
        `
    })
        navigator.clipboard.writeText(copia)
                    .then(() => alert("Todos os cadastros foram copiados!"))
                    .catch(err => console.error(err));

    let url = `https://wa.me/?text=${encodeURIComponent(copia)}`;

    window.open(url, "_blank");
}

