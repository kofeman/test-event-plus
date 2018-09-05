$(document).ready(function ($) {

// CODE STYLE //
	
	/* FUNCTION NAME */

// (function () {
// 	var $element = $(".element");
//
// 	if ($element.length) {
//
// 		$element.on("click", function () {
// 			someFunction()
// 		});
//
// 		function someFunction() {
// 			// DO SOMETHING
// 		}
// 	}
// })();
	
	/* END FUNCTION */
	
	/* DRAG AND DROP */
	
	$( "#sortable" ).sortable();
	//$( "#sortable" ).disableSelection();
	
	/* END DRAG AND DROP */
	
	
	$('.js-add-time').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-time').hide();
		
		$('.js-time').show();
	});
	
	// $('.js-add-place').on('click', function (e) {
	// 	e.preventDefault();
	//
	// 	$('.js-place').show();
	// })
	
	$('.js-add-date').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-date').hide();
		
		$('.js-date').show();
	})
	
	$('.js-add-input-yt').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-yt').addClass('active');
		
		$('.social__input_yt').show();
	})
	
	$('.js-add-input-vk').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-vk').addClass('active');
		
		$('.social__input_vk').show();
	})
	
	$('.js-add-input-inst').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-inst').addClass('active');
		
		$('.social__input_inst').show();
	})
	
	$('.js-add-input-sound').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-sound').addClass('active');
		
		$('.social__input_sound').show();
	})
	
	$('.js-add-input-home').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-home').addClass('active');
		
		$('.social__input_home').show();
	})
});