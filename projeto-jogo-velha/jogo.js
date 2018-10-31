$(document).ready( function() {

	$('#palcoJogo').hide();
	
	$('#iniciar').click( function() {

		var jogador1 = document.getElementById('jogador1').value;
		var jogador2 = document.getElementById('jogador2').value;

		if(jogador2 == "" || jogador2 == "") {
			document.getElementById('msgErro').innerHTML = "Insira os nomes dos jogadores!";

			return false;			
		}

		$('#telaInicial').hide();
		$('#palcoJogo').show();
	} )

} )
