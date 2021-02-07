$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});


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


$(document).ready(function(){
	$('ul.buttonsRegresar li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.buttonsRegresar li a').click(function(){
		$('ul.buttonsRegresar li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeButton = $(this).attr('href');
		$(activeButton).show();
		return false;
	});
});

$(document).ready(function(){
	$('ul.buttonGALF li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.buttonGALF  li a').click(function(){
		$('ul.buttonGALF li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeButton = $(this).attr('href');
		$(activeButton).show();
		return false;
	});
});

$(document).ready(function(){
	$('ul.buttonsEjER li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.buttonsEjER  li a').click(function(){
		$('ul.buttonsEjER li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeButton = $(this).attr('href');
		$(activeButton).show();
		return false;
	});
});
