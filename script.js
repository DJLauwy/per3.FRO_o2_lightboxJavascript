const allInfo = document.querySelectorAll('.meerLezen');
const allKlein = document.querySelectorAll('.formaatKlein');

let allIndex = [];

for(let i=0; i<allInfo.length; i++){
	allIndex.push(allInfo[i]);
	allInfo[i].remove();
}

function maakModaal(num){
	console.log(allIndex[num]);
}

for(let i=0; i<allKlein.length; i++){
	allKlein[i].addEventListener('click', function(){
		maakModaal(i);
	});
}