
let noLoop = 0
let rankResult = classicarRank(9, 10)
let nivelResult = classificador(rank)

while (rank < 0) {
    noLoop++
    if (noLoop === 1) {
        console.log("Você ainda não está em um rank")
    }
}

console.log(`O Herói tem de saldo de ${rank} está no nível de ${nivel}`)

function classicarRank(vitoria, derrota) {
    rank = vitoria - derrota
    return rank
}

function classificador(rank) {
    if (rank >= 10 && rank <= 0) {
        nivel = "Ferro"
    }
    else if (rank >= 11 && rank <= 20) {
        nivel = "Bronze"
    }
    else if (rank >= 21 && rank <= 50) {
        nivel = "Prata"
    }
    else if (rank >= 51 && rank <= 80) {
        nivel = "Ouro"
    }
    else if (rank >= 81 && rank <= 90) {
        nivel = "Diamante"
    }
    else if (rank >= 91 && rank <= 100) {
        nivel = "Lendário"
    }
    else if (rank >= 101) {
        nivel = "Imortal"
    }
    else {
        nivel = " "
    }

    return nivel

}

