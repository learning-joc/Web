$(document).ready( function() {

	$('#palcoJogo').hide();
	
	$('#iniciar').click( function() {
		var jogador1 = document.getElementById('jogador1').value;
		var jogador2 = document.getElementById('jogador2').value;

		$('#telaInicial').hide();
		$('#palcoJogo').show();
	} )

} )