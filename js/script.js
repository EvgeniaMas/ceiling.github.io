$(document).ready(function(){
	function sticky_relocate() {
			$('body').scrollspy({ target: '.scroll-nav',offset:100 })
	}
	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});
});
///////плавный скролл

$(document).ready(function() {
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
});

$(function(){
//product-image slide
	$('#sity li a').on('click', function(){
		var sity = $(this).attr('data-sity');
		var phone = $(this).attr('data-phone');
		//var imgsrc = ""+src+"";
		$('#v_sity').html(sity);
		$('#v_phone').html(phone);
	});
});

$(function(){
//product-image slide
	$('.small_img img').on('click', function(){
		var src = $(this).attr('src');
		var imgsrc = ""+src+"";
		$('#img-big').attr('src',imgsrc);
		//$('#img-big').addClass('asd');
	});
});


///выбор
$(document).ready(function(){
	var ac_pr = 'Предложим огромный выбор материалов и цветовых решений';
	var ac_mod = 'Проконсультируем и подберем подходящий вариант';
	var ac_ser = 'Разработаем индивидуальный дизайн с учетом Ваших пожеланий';
	var ac_sel = 'Выполним все работы в установленные сроки';
	$('#h-t').html(ac_pr);
	$('.caption').css('background-image', 'url(img/slide/1.jpg)');
	$('.vib li').hover(function(e) {
		e.preventDefault();
		$('.vib li').removeClass('active');
		$(this).addClass('active');
		if($('#ac-pr').hasClass('active')){
			$('#h-t').html(ac_pr);
			$('.caption').css('background-image', 'url(img/slide/1.jpg)');
		}
		if($('#ac-mod').hasClass('active')){
			$('#h-t').html(ac_mod);
			$('.caption').css('background-image', 'url(img/slide/2.jpg)');
		}
		if($('#ac-ser').hasClass('active')){
			$('#h-t').html(ac_ser);
			$('.caption').css('background-image', 'url(img/slide/3.jpg)');
		}
		if($('#ac-sel').hasClass('active')){
			$('#h-t').html(ac_sel);
			$('.caption').css('background-image', 'url(img/slide/4.jpg)');
		}
	});
});

$(document).ready(function(){
	$(function() {
		$('input[type=radio]').styler();
	});
});

$(document).ready(function(){
	var inc = 1;
	$('.plus').on('click', function() {
		var old_val = parseInt($('#calc-input').val());
		if(isNaN(old_val)) {
			old_val = 0;
		}
		var val = old_val + inc;
		$('#calc-input').val(val);
	});

	$('.minus').on('click', function() {
		var old_val = parseInt($('#calc-input').val());
		if(isNaN(old_val)) {
			old_val = 0;
		}
		var val = old_val - inc;
		if (val <= 0) {
			val = 0;
		}
		$('#calc-input').val(val);
	});
});


