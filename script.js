const filme1 = "As Branquelas";
const duracao1 = 109;
const continuacao1 = false;

const filme2 = "Todo mundo em pânico";
const duracao2 = 88;
const continuacao2 = true;

const filme3 = "O dia em que a Terra parou";
const duracao3 = 104;
const continuacao3 = false;

const filme4 = "Vingadores";
const duracao4 = 143;
const continuacao4 = true;

const media = (duracao1 + duracao2 + duracao3 + duracao4)/3;
console.log (`Duração média dos filmes ${media.toFixed(2)} minutos.`);

const continuacao = continuacao1 && continuacao2 && continuacao3 && continuacao4;
console.log (continuacao);

