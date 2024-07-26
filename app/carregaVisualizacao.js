const elementoParaInserirPersonagens = document.getElementById('personagens')

function exibirPersonagens(listaDePersonagens) {        
    
    listaDePersonagens.forEach(personagem => {  
        
        if (personagem.status == "Alive"){
            elementoParaInserirPersonagens.innerHTML +=
            `<div class="personagem">
                <img class="personagens__imagens" src="${personagem.image}"/>
                <h2 class="personagem__titulo">
                    ${personagem.name}
                </h2>
                <p><b class="personagem__descricao">Visto por ultimo em:</b> ${personagem.location.name}</p> 
                <p><b class="personagem__descricao">Gênero:</b> ${personagem.gender}</p> 
                <p><b class="personagem__descricao">Aparições na 1ª temporada:</b> ${personagem.ep1Temp}</p>                                                                                                  
                <p><b class="personagem__descricao">Aparições na 2ª temporada:</b> ${personagem.ep2Temp}</p>                                                                                                  
                <p><b class="personagem__descricao">Aparições na 3ª temporada:</b> ${personagem.ep3Temp}</p>
                <p><b class="personagem__descricao">Aparições no total:</b> ${personagem.epTotal}</p>
                <p><b class="personagem__descricao">Status:</b> ${personagem.status}</p>                                                                                                                                                                                                    
                <div class="tags">
                    <span class="tag">${personagem.species}</span>
                </div>
            </div>
            <br>`
        } 
    });
}