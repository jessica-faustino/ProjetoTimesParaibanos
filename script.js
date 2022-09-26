const filme1 = {
    titulo : "As Branquelas",
    duracao : 109,
    continuacao : false, 
    elenco : ["Shawn Wayans", "Marlon Wayans", "Maitland Ward", "Anne Dudek", "Terry Crews"],
    capa: ""
}

const filme2 = {
    titulo: "Todo mundo em pânico",
    duracao: 88,
    continuacao : true,
    elenco : ["Anna Faris", "Shawn Wayans", "Marlon Wayans", "Shannon Elizabeth", "Regina Hall"],
    capa: ""
}

 const filme3 = {
    titulo: "O dia em que a Terra parou",
    duracao : 104,
    continuacao : false,
    elenco : ["Keanu Reeves", "Jennifer Connelly", "Patricia Neal", "Jaden Smith", "Jon Hamm"],
    capa: ""
}

 const filme4 = { 
    titulo: "Vingadores",
    duracao : 143,
    continuacao : true,
    elenco : ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Tom Hiddleston"],
    capa: ""
}
 const filme5 = {
    titulo: "Piratas do Caribe, a maldição do pérola negra",
    duracao: 143,
    continuacao: true,
    elenco: ["Johnny Depp", "Keira Knightley", "Orlando Bloom", "Geoffrey Rush", "Kevin McNally"],
    capa: ""
 }
 const filme6 = {titulo: 'O Auto da Compadecida',
duracao: 2000,
continuacao: false,
elenco: 'Matheus Nachtergaele, Selton Mello, Marco Nanini, Rogério Cardoso, Diogo Villela, Denise Fraga, Lima Duarte, Luís Melo,Fernanda Montenegro',
capa: ""
}

const filmes = [];

// ************************* SEMANA 3 *******************************
//Adicionando novos objetos no array de objetos, utilizando o push()

//filmes.push(filme1,filme2,filme3,filme4);

// ************************ SEMANA 4 **********************************
//Fazendo uma condicional antes de adicionar os objetos ao array SEMANA 4

if (filme1.continuacao === true){
    filmes.push(filme1);
}else {
    console.log("**ALERT** '" + filme1.titulo +"' não foi adicionado");} 

if (filme2.continuacao === true){
    filmes.push(filme2)
}else {
    console.log("**ALERT** '" + filme2.titulo +"' não foi adicionado");}

if (filme3.continuacao === true){
    filmes.push(filme3)
}else{ 
    console.log("**ALERT** '" + filme3.titulo +"' não foi adicionado");}

if (filme4.continuacao=== true){
    filmes.push(filme4);
}else{
    console.log("**ALERT**'" + filme4.titulo +"' não foi adicionado");}

if (filme5.continuacao === true){
    filmes.push(filme5);
}else{
    console.log("**ALERT**'" + filme5.titulo +"' não foi adicionado");}

if (filme6.continuacao=== true){
    filmes.push(filme6);
}else{
    console.log("**ALERT**'" + filme6.titulo +"' não foi adicionado");}

console.log ("Filmes que tem continuação: ", filmes);



// ***************************** SEMANA 5 *********************************
// Fazendo um laço para ler o array do objeto como string

let auxiliar = "";

// for(let i = 0; i < filmes.length; i++){
        
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

//console.log(auxiliar)

const todosOsFilmes = [];
todosOsFilmes.push(filme1,filme2,filme3,filme4,filme5,filme6)

//console.log (todosOsFilmes)


// ********************* SEMANA 6 ***********************
//Recebendo um objeto e devolvendo uma String do relatório com os dados do objeto.

const devolvendoString = (objeto) => {
    var texto = JSON.stringify(objeto,null,2);
    return texto;
}

//console.log (devolvendoString(filmes));

//SEMANA 6
//1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

function imprimeString (objeto) { //IMPRIME UM ÚNICO OBJETO
    
    console.log(`Informações sobre o filme: ${objeto.titulo} \n Com duração de: ${objeto.duracao} \n Possui continuação: ${objeto.continuacao} \n Elenco: ${objeto.elenco}`);

}

//imprimeString(filme3)

function imprimeStringObjeto(objetos){ //IMPRIME A LISTA DE OBJETOS DO ARRAY
    for(let string of objetos){
        imprimeString(string)
    }
}

imprimeStringObjeto(filmes);

//2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

//criar função com dois parametros, array de objetos e string
//função retorna objeto
//objeto precisa ter vaLor igual ao parametro passado como string 
//caso não tenha valor igual ao parametro, rodar alerta

function arrayString(arrayDeObjetos, nomeDoFilme){
    const resultado = arrayDeObjetos.filter(movie => {
        return movie.titulo.toUpperCase().includes(nomeDoFilme.toUpperCase())
    })
    if (resultado.length === 0){
        alert("Filme não encontrado!")
    }else{
    return resultado
    }
}

const nomeDoFilme = prompt("Digite aqui um filme dos Studios Ghibli:");

console.log(arrayString (todosOsFilmes, nomeDoFilme))

let filtroFilmes = arrayString(todosOsFilmes, nomeDoFilme)
imprimeStringObjeto(filtroFilmes);





