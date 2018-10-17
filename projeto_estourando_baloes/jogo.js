function iniciaJogo () {
	var url = window.location.search;
	var nivel = url.replace("?", "");
	var tempo_s = 0;
	if(nivel == 1) {
		tempo_s = 120;
	} 
	if (nivel == 2) {
		tempo_s = 60;
	}
	if (nivel == 3) {
		tempo_s = 30;
	}
	
	// Inserindo segundos no span
	document.getElementById('tempo_jogo').innerHTML = tempo_s;

	// Parei aqui
}


function criaBaloes () {

}