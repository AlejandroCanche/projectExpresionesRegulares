$(document).ready(function(){
	$('ul.buttonsTeoria li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.buttonsTeoria li a').click(function(){
		$('ul.buttonsTeoria li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeButton = $(this).attr('href');
		$(activeButton).show();
		return false;
	});
});