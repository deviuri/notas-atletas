function calcularMedia(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notas = atleta.notas;

    notas = notas.sort();

    notas.shift();
    notas.pop();

    let media = 0;
    for (let j = 0; j < notas.length; j++) {
      media += notas[j];
    }
    media /= notas.length;

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notas.join(',')}`);
    console.log(`Média Válida: ${media}`);
  }
}
let atletas = [  {    nome: "Cesar Abascal",    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

calcularMedia(atletas)
