$(document).ready( function() {

	$('#palcoJogo').hide();
	
	$('#iniciar').click( function() {

		if($('#jogador1').val() == "") {
			$('#jogador1').css("border", "2px solid red");
			$('#jogador1').css("borderRadius", "5px");
			return false;
		}

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
