$(document).ready(function(){
	$('ul.buttonsOER li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.buttonsOER li a').click(function(){
		$('ul.buttonsOER li a').removeClass('active');
		$(this).addClass('active2');
		$('.secciones article').hide();

		var activeButton = $(this).attr('href');
		$(activeButton).show();
		return false;
	});
});