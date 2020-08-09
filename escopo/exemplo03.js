//-------------------------------------
//ESCOPO GLOBAL 

var idade = 19;
let ano = 2001;
const mes = 5;

console.log(window.idade); //19
console.log(window.ano); // undefined
console.log(window.mes); // undefined

//-------------------------------------
//ESCOPO DE FUNÇÃO 

function definirValores(){
	var idade = 19;
	let ano = 2001;
	const mes = 5;
}

console.log(idade); // Error, undefined
console.log(ano); // Error, undefined
console.log(mes); // Error, undefined
//-------------------------------------
//ESCOPO DE BLOCO 

{

	var idade = 19;
	let ano = 2001;
	const mes = 5;

	console.log(idade); // 19
	console.log(ano); // 2001
	console.log(mes); // 5
}

	console.log(idade); // 19
	console.log(ano); // Error, undefined
	console.log(mes); // Error, undefined