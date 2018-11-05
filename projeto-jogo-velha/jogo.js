var rodada = 1;
var matrizJogo = new Array(3);

matrizJogo['a'] = Array(3);
matrizJogo['b'] = Array(3);
matrizJogo['c'] = Array(3);

matrizJogo['a'][1] = 0;
matrizJogo['a'][2] = 0;
matrizJogo['a'][3] = 0;

matrizJogo['b'][1] = 0;
matrizJogo['b'][2] = 0;
matrizJogo['b'][3] = 0;

matrizJogo['c'][1] = 0;
matrizJogo['c'][2] = 0;
matrizJogo['c'][3] = 0;

$(document).ready( function() {
	
	$('#iniciar').click( function() {

			// Validar entradas
			if(!validaEntradasNomes()) {
				return false;
			}

			// Exibir nomes
			$('#nomeJogador1').html($('#jogador1').val());
			$('#nomeJogador2').html($('#jogador2').val());

			//$('#msg').html($('#jogador1').val());
			$('#palcoJogo').show();
			$('#telaInicial').hide();
			
			$('#msg').html("Jogada de " + $('#jogador1').val());
	});

	$('.jogada').click( function() {
		var campoId = this.id;
		$('#' + campoId).off();
		realizaJogada(campoId);
	});

} )

// Função que realiza a jogada
function realizaJogada(id) {
	var icone = '';
	var ponto = 0;
	if((rodada % 2) == 1) {
		$('#msg').html("Jogada de " + $('#jogador2').val());
		ponto = -1;
		icone = 'url("imagens/marcacao_1.png")';
	} else {
		$('#msg').html("Jogada de " + $('#jogador1').val());
		ponto = 1;
		icone = 'url("imagens/marcacao_2.png")';
	}
	rodada++;
	$('#' + id).css("background-image", icone);

	var linhaColuna = id.split('');
	matrizJogo[linhaColuna[0]][linhaColuna[1]] = ponto;

	verificaCombinacao();
}

// Função que verifica a combinação das jogadas
function verificaCombinacao() {
	// Verifica na horizontal
	var pontos = 0;
	for (var i = 1; i <= 3; i++) {
		pontos = pontos + matrizJogo['a'][i];
	}	
	temGanhador(pontos);

	pontos = 0;
	for (var i = 1; i <= 3; i++) {
		pontos = pontos + matrizJogo['b'][i];
	}
	temGanhador(pontos);

	pontos = 0;
	for (var i = 1; i <= 3; i++) {
		pontos = pontos + matrizJogo['c'][i];
	}	
	temGanhador(pontos);
	
	// Verifica na vertical
	for (var i = 1; i <= 3; i++) {
		pontos = 0;
		pontos = pontos + matrizJogo['a'][i];
		pontos = pontos + matrizJogo['b'][i];
		pontos = pontos + matrizJogo['c'][i];

		temGanhador(pontos);
	}	

	// Verifica na diagonal
	pontos = 0;
	pontos = matrizJogo['a'][1] + matrizJogo['b'][2] + matrizJogo['c'][3];
	temGanhador(pontos);

	pontos = 0;
	pontos = matrizJogo['a'][3] + matrizJogo['b'][2] + matrizJogo['c'][1];
	temGanhador(pontos);
}

// Função que verifica se alguém ganhou
function temGanhador(pontos) {
	deuVelha();
	if(pontos == -3) {
		$('#ganhador1').html("Vencedor");
		$('#msg').html("Fim de jogo");
		$('.jogada').off();
	} else if(pontos == 3) {
		$('#ganhador2').html("Vencedor");
		$('#msg').html("Fim de jogo");
		$('.jogada').off();
	}
}

// Função para validação das entradas de nomes dos jogadores
function validaEntradasNomes() {
	if($('#jogador1').val() == "" && $('#jogador2').val() == "") {
		$('#jogador1').css("border", "1px solid red");
		$('#jogador2').css("border", "1px solid red");

		return false;
	}
	if($('#jogador1').val() == "") {
		$('#jogador1').css("border", "1px solid red");
		$('#jogador2').css("border", "transparent");
		return false;
	}
	if($('#jogador2').val() == "") {
		$('#jogador1').css("border", "transparent");
		$('#jogador2').css("border", "1px solid red");
		return false;
	}
	return true;
}

function deuVelha() {
	linhaA = false;
	linhaB = false;
	linhaC = false;

	for(var i = 1; i <=3; i++) {
		if(matrizJogo['a'][i] != 0) {
			linhaA = true;
		} else if(matrizJogo['b'][i] != 0) {
			linhaB = true;
		} else if(matrizJogo['c'][i] != 0) {
			linhaC = true;
		}
	}

	var velha = linhaA && linhaB;
	velha = velha && linhaC;
	if(velha == true) {
		$('#msg').html("Deu velha");		
	}
}

// Usar contador de rodada, se chegar a 9 e ninguem tiver ganhado deu velha.