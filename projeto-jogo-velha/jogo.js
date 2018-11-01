var rodada = 1;
var matrizJogo = new Array(3);

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

	$('.jogada').click( function() {
		var campoId = this.id;
		realizaJogada(campoId);
	});

} )


function realizaJogada(id) {
	var icone = '';
	var ponto = 0;
	if((rodada % 2) == 1) {
		$('#msg').html($('#jogador1').val());
		ponto = -1;
		icone = 'imagens/marcacao_1.png';
	} else {
		$('#msg').html($('#jogador2').val());
		ponto = 1;
		icone = 'imagens/marcacao_2.png';
	}
	rodada++;
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