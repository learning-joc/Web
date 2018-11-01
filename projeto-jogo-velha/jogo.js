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
			
	});

//	$('#msg').html($('#jogador1').val());
	$('#iniciar').load(function() {
		$('#msg').html("Vez de " + $('#jogador1').val());
	});

	$('.jogada').click( function() {
		var campoId = this.id;
		realizaJogada(campoId);
	});

} )


function realizaJogada(id) {
	var icone = '';
	var ponto = 0;
	if((rodada % 2) == 1) {
		$('#msg').html("Vez de " + $('#jogador2').val());
		ponto = -1;
		icone = 'url("imagens/marcacao_1.png")';
	} else {
		$('#msg').html("Vez de " + $('#jogador1').val());
		ponto = 1;
		icone = 'url("imagens/marcacao_2.png")';
	}
	rodada++;
	$('#' + id).css("background-image", icone);

	var linhaColuna = id.split('');
	matrizJogo[linhaColuna[0]][linhaColuna[1]] = ponto;

	// Parei aqui
}


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