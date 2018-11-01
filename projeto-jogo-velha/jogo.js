$(document).ready( function() {
	
	$('#iniciar').click( function () {

			// Validar entradas
			if(!validarEntradasNomes()) {
				return false;
			}

			// Exibir nomes
			$('#nomeJogador1').html($('#jogador1').val());
			$('#nomeJogador2').html($('#jogador2').val());

			$('#palcoJogo').show();
			$('#telaInicial').hide();


	})

} )


function validarEntradasNomes() {
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
