const filme1 = {
    titulo : "As Branquelas",
    duracao : 109,
    continuacao : false, 
    elenco : ["Shawn Wayans", "Marlon Wayans", "Maitland Ward", "Anne Dudek", "Terry Crews"]
}

const filme2 = {
    titulo: "Todo mundo em pânico",
    duracao: 88,
    continuacao : true,
    elenco : ["Anna Faris", "Shawn Wayans", "Marlon Wayans", "Shannon Elizabeth", "Regina Hall"]
}

 const filme3 = {
    titulo: "O dia em que a Terra parou",
    duracao : 104,
    continuacao : false,
    elenco : ["Keanu Reeves", "Jennifer Connelly", "Patricia Neal", "Jaden Smith", "Jon Hamm"]
}

 const filme4 = { 
    titulo: "Vingadores",
    duracao : 143,
    continuacao : true,
    elenco : ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Tom Hiddleston"]
}
 const filme5 = {
    titulo: "Piratas do Caribe, a maldição do pérola negra",
    duracao: 143,
    continuacao: true,
    elenco: ["Johnny Depp", "Keira Knightley", "Orlando Bloom", "Geoffrey Rush", "Kevin McNally"]
 }

const filmes = [];

// SEMANA 3
//Adicionando novos objetos no array de objetos, utilizando o push()

//filmes.push(filme1,filme2,filme3,filme4);

//Fazendo uma condicional antes de adicionar os objetos ao array SEMANA 4

if (filme1.continuacao === true){
    filmes.push(filme1);
}
else {
    console.log("**ALERT** '" + filme1.titulo +"' não foi adicionado");
}    
if (filme2.continuacao === true){
    filmes.push(filme2)
}
else {
    console.log("**ALERT** '" + filme2.titulo +"' não foi adicionado");
}
if (filme3.continuacao === true){
    filmes.push(filme3)
}
else{ 
    console.log("**ALERT** '" + filme3.titulo +"' não foi adicionado");
}
if (filme4.continuacao=== true){
    filmes.push(filme4);
}
else{
    console.log("**ALERT**'" + filme4.titulo +"' não foi adicionado");
}
if (filme5.continuacao=== true){
    filmes.push(filme5);
}
else{
    console.log("**ALERT**'" + filme5.titulo +"' não foi adicionado");
}


console.log ("Filmes que tem continuação: ", filmes);

// SEMANA 5
// Fazendo um laço para ler o array do objeto como string

let auxiliar = "";

// for(let i = 0; i < mes.lefilngth; i++){
        
//     for(let j = 0; j < 1; j++){
//         auxiliar += `Elenco: ${filmes[i].elenco.toString()} \n`
//     }
    
//     auxiliar += `Título: ${filmes[i].titulo} \nDuração: ${filmes[i].duracao} \nContinuação: ${filmes[i].continuacao} \n\n`
// }

for (i in filmes){
    auxiliar += `Título: ${filmes[i].titulo} \nDuração: ${filmes[i].duracao} \nContinuação: ${filmes[i].continuacao} \n`
    
    for(j = 0; j < 1; j++){
        auxiliar += `Elenco: ${filmes[i].elenco.toString()} \n\n`
    }
}

console.log(auxiliar)

/*
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
Elenco: ${elenco4}`); */

/* const filmes = [filme1,filme2,filme3,filme4];


for ( const i=0; i <= filmes.length; i++) {
    
    console.log (filmes[i]);
}

console.log (filmes[i]) */