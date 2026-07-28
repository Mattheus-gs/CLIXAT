

let listaclients = []
let resultado = ""


function enviar(){
    let nomesimples = document.getElementById("1").value
    nomesimples = nomesimples.toLowerCase()
    
    let clientebase = {
       
        nome:nomesimples,
        pontoInicial: document.getElementById("2").value,
        distancia:document.getElementById("3").value,
        valor: Number(document.getElementById("4").value),
        dsemana: document.getElementById("6").value,
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
            document.getElementById("6").value = listaclients[i].dsemana
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
   document.getElementById("6").value =  ""
}

function altdcliente(){
    let alterar = document.getElementById("5").value
    let alt2 = document.getElementById("2").value 
   let alt3 = document.getElementById("3").value 
   let alt4 = Number(document.getElementById("4").value)
   let alt5 = Number(document.getElementById("6").value)
   let alterar2
    for(let i = 0; i < listaclients.length;i++){
        if(alterar == listaclients[i].id){
            listaclients[i].pontoInicial = alt2 
            listaclients[i].distancia = alt3   
            listaclients[i].pontoInicial = alt4
            listaclients[i].dsemana = alt5       
        }
    } 
    resultado = ""
    for(let i = 0; i < listaclients.length;i++){
         alterar2 = listaclients[i].pontoInicial.toFixed(2).replace(".",",")
    
         resultado = `<div class="card-dino">
                <hr>
                <h2>Nome: ${listaclients[i].nome}</h2>
                <p>Ponto inicial da corrida: ${listaclients[i].pontoInicial} m</p>
                <p>distancia da corrida: ${listaclients[i].distancia} </p>
                <p>Valor: R$ ${alterar2} </p>
                <p>Dia(s) da semana: ${listaclients[i].dsemana} </p>
                </div>
                `
    }
    document.getElementById("resultado").innerHTML = resultado 
limpaTudo()

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
         carregar1 = listaclients[i].valor.toFixed(2).replace(".",",")
        
        
         resultado += `<div class="card-dino">
                <hr>
                <h2>Nome: ${listaclients[i].nome}</h2>
                <p>Ponto inicial da corrida: ${listaclients[i].pontoInicial} m</p>
                <p>distancia da corrida: ${listaclients[i].distancia} </p>
                <p>Valor da corrida: R$ ${carregar1} </p>
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
        `
    })
        navigator.clipboard.writeText(copia)
        .then(() => alert("Todos os cadastros foram copiados!"))
        .catch(err => console.error(err));

    let url = `https://wa.me/?text=${encodeURIComponent(copia)}`;

    window.open(url, "_blank");
}
        

