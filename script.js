

let listaclients = []
let resultado = ""


function enviar(){
    
    let clientebase = {
       
        nome:document.getElementById("1").value,
        pontoInicial: document.getElementById("2").value,
        distancia:document.getElementById("3").value,
        valor: Number(document.getElementById("4").value),
        id: Date.now(),
}
    
    listaclients.push(clientebase)

   let sla 
for(let i = 0; i < listaclients.length;i++){
    sla = listaclients[i].valor.toFixed(2).replace(".",",")
    
        resultado = `<div class="card-cliente">
                <hr>
                <h2>Nome: ${listaclients[i].nome}</h2>
                <p>Ponto de partida: ${listaclients[i].pontoInicial}</p>
                <p>distancia da corrida: ${listaclients[i].distancia} Km(s)</p>
                <p>Valor: R$ ${sla} </p>
                <p>ID: ${listaclients[i].id} </p><br>
                </div>
                `
        }
    
    document.getElementById("resultado").innerHTML += resultado
    limpaTudo()
    salvando()
}

function apagar(){
    let retirar = document.getElementById("1").value
    for(let i = 0; i < listaclients.length;i++){
        if(retirar == listaclients[i].nome){
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
                <p>Valor: R$ ${sla} </p>
                <p>ID: ${listaclients[i].id} </p><br>
                </div>
                `
    }

document.getElementById("resultado").innerHTML = resultado 
limpaTudo()
}


function limpaTudo(){
    document.getElementById("1").value = ""
   document.getElementById("2").value = ""
   document.getElementById("3").value = ""
   document.getElementById("4").value =  ""
   document.getElementById("5").value =  ""
}

function altdcliente(){
    let alterar = document.getElementById("5").value
    let alt2 = document.getElementById("2").value 
   let alt3 = document.getElementById("3").value 
   let alt4 = Number(document.getElementById("4").value)
   let alterar2
    for(let i = 0; i < listaclients.length;i++){
        if(alterar == listaclients[i].id){
            listaclients[i].pontoInicial = alt2 
            listaclients[i].distancia = alt3   
            listaclients[i].pontoInicial = alt4       
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
                <p>ID: ${listaclients[i].id} </p><br>
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

    resultado = ""
    for(let i = 0; i < listaclients.length;i++){
         carregar1 = listaclients[i].pontoInicial.toFixed(2).replace(".",",")
    
         resultado = `<div class="card-dino">
                <hr>
                <h2>Nome: ${listaclients[i].nome}</h2>
                <p>pontoInicial da distancia da corridarida: ${listaclients[i].pontoInicial} m</p>
                <p>distancia da corrida: ${listaclients[i].distancia} </p>
                <p>Ponto de partida: R$ ${carregar1} </p>
                <p>ID: ${listaclients[i].id} </p><br>
                </div>
                `
    }
    document.getElementById("resultado").innerHTML = resultado 

    
}

