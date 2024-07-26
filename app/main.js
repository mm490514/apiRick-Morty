let personagens = []

const endpointDaAPI = "http://127.0.0.1:5501/characters.json";

getBuscaPersonagens()

async function getBuscaPersonagens() {
    const res = await fetch(endpointDaAPI)
    personagens = await res.json()
    contarEpisodios(personagens)    
    ordernarPersonagens(personagens)      
}


function contarEpisodios(listaDePersonagens) {
    listaDePersonagens.forEach(personagem => {   
        
        const episodiosNumeros = personagem.episode.map(url => {
            const parts = url.split('/');
            return parseInt(parts[parts.length - 1], 10);
        });

        const ep1Temp = episodiosNumeros.filter(num => num <= 11);
        const ep2Temp = episodiosNumeros.filter(num => num >= 12 && num <= 21);
        const ep3Temp = episodiosNumeros.filter(num => num >= 21 && num <= 31);               

        personagem.ep1Temp = ep1Temp.length;
        personagem.ep2Temp = ep2Temp.length;
        personagem.ep3Temp = ep3Temp.length;
        personagem.epTotal = ep1Temp.length + ep2Temp.length + ep3Temp.length;
            
    });


}

function ordernarPersonagens(personagens) {
    let personagensOrdenados = personagens.sort((a, b) => {
        // Ordena primeiro pela quantidade de episódios em ordem decrescente
        if (b.epTotal !== a.epTotal) {
            return b.epTotal - a.epTotal;
        }
        // Se a quantidade de episódios for igual, ordena pelo nome em ordem alfabética
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });    

    exibirPersonagens(personagensOrdenados) 
}