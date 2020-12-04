$(document).ready(function(){
	$('ul.buttons li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.buttons li a').click(function(){
		$('ul.buttons li a').removeClass('active');
		$(this).addClass('active2');
		$('.secciones article').hide();

		var activeButton = $(this).attr('href');
		$(activeButton).show();
		return false;
	});
});