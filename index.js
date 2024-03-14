// Desafio - Classificador de Nível de Herói

// Utilizando MATRIZ / estrutura de repeticao condicional If / estrutura de repetição for.
// Interpolação para exibição do resultado de forma dinâmica.

let herois = [
    { 'nome': 'Jorge', 'experiencia': 1000 },
    { 'nome': 'Chico', 'experiencia': 2000 },
    { 'nome': 'Maria', 'experiencia': 3000 },
    { 'nome': 'Ouriço', 'experiencia': 7000 },
    { 'nome': 'Samanbaio', 'experiencia': 8100 }
]

function nivelHeroi(experiencia) {
    if (experiencia <= 1000) {
        return "Ferro";
    } else if (experiencia <= 2000) {
        return "Bronze";
    } else if (experiencia <= 3001) {
        return "Prata";
    } else if (experiencia <= 4001) {
        return "Ouro";
    } else if (experiencia <= 5001) {
        return "Platina";
    } else if (experiencia <= 6001) {
        return "Ascendente";
    } else if (experiencia <= 8000) {
        return "Imortal";
    } else if (experiencia >= 8001) {
        return "Radiante";
    }
}

for(i=0; i < herois.length; i++) {
    console.log(`O Herói: ${herois[i].nome}, está no nível ${nivelHeroi(herois[i].experiencia)} pois sua pontuação está em ${herois[i].experiencia}!`);
}
