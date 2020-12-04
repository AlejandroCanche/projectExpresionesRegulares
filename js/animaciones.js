$(document).ready(function(){
	$('ul.buttonsAnimaciones li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.buttonsAnimaciones li a').click(function(){
		$('ul.buttonsAnimaciones li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeButton = $(this).attr('href');
		$(activeButton).show();
		return false;
	});
});