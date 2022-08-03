const filme1 = "As Branquelas";
const duracao1 = 109;
const continuacao1 = false;
const elenco1 = ["Shawn Wayans", "Marlon Wayans", "Maitland Ward", "Anne Dudek", "Terry Crews"];

const filme2 = "Todo mundo em pânico";
const duracao2 = 88;
const continuacao2 = true;
const elenco2 = ["Anna Faris", "Shawn Wayans", "Marlon Wayans", "Shannon Elizabeth", "Regina Hall"]; 

const filme3 = "O dia em que a Terra parou";
const duracao3 = 104;
const continuacao3 = false;
const elenco3 = ["Keanu Reeves", "Jennifer Connelly", "Patricia Neal", "Jaden Smith", "Jon Hamm"];

const filme4 = "Vingadores";
const duracao4 = 143;
const continuacao4 = true;
const elenco4 = ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Tom Hiddleston"];

const media = (duracao1 + duracao2 + duracao3 + duracao4)/3;
console.log (`Duração média dos filmes ${media.toFixed(2)} minutos.`);

const continuacao = continuacao1 && continuacao2 && continuacao3 && continuacao4;
console.log (continuacao);

console.log (`Filme: ${filme1.toUpperCase()}
Duração: ${duracao1}
Tem continuação? ${continuacao1}
Elenco: ${elenco1}`);

console.log (`Filme: ${filme2.toUpperCase()}
Duração: ${duracao2}
Tem continuação? ${continuacao2}
Elenco: ${elenco2}`);

console.log (`Filme: ${filme3.toUpperCase()}
Duração: ${duracao3}
Tem continuação? ${continuacao3}
Elenco: ${elenco3}`);

console.log (`Filme: ${filme4.toUpperCase()}
Duração: ${duracao4}
Tem continuação? ${continuacao4}
Elenco: ${elenco4}`);
