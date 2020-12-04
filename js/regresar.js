$(document).ready(function(){
	$('ul.buttonsRegresar li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.buttonsRegresar li a').click(function(){
		$('ul.buttonsRegresar li a').removeClass('active');
		$(this).addClass('active2');
		$('.secciones article').hide();

		var activeButton = $(this).attr('href');
		$(activeButton).show();
		return false;
	});
});