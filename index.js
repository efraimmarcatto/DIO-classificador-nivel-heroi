let heroi = { nome: 'José', exp: 7001, nivel: '' }

if (heroi.exp < 1000) {
    heroi.nivel = 'Ferro'
} else if (heroi.exp <= 2000) {
    heroi.nivel = 'Bronze'
} else if (heroi.exp <= 5000) {
    heroi.nivel = 'Prata'
} else if (heroi.exp <= 7000) {
    heroi.nivel = 'Ouro'
} else if (heroi.exp <= 8000) {
    heroi.nivel = 'Platina'
} else if (heroi.exp <= 9000) {
    heroi.nivel = 'Ascendente'
} else if (heroi.exp <= 10000) {
    heroi.nivel = 'Imortal'
} else {
    heroi.nivel = 'Radiante'
}

console.log(`O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}`)