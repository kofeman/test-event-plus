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
	});
	
	
	
	$('.js-add-input-yt').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-yt').addClass('active');
		
		$('.social__input_yt').show();
	});
	
	
	
	$('.js-add-input-vk').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-vk').addClass('active');
		
		$('.social__input_vk').show();
	});
	
	
	
	$('.js-add-input-inst').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-inst').addClass('active');
		
		$('.social__input_inst').show();
	});
	
	
	
	$('.js-add-input-sound').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-sound').addClass('active');
		
		$('.social__input_sound').show();
	});
	
	
	
	$('.js-add-input-home').on('click', function (e) {
		e.preventDefault();
		
		$('.js-add-input-home').addClass('active');
		
		$('.social__input_home').show();
	});
	
	
	$('.js-tags').on('focusout', function () {
		
		var str = $(this).val();
		
		var words = str.split(',');
		
		$('.js-tags').val('');
		
		$('.sidebar__tags-list').empty();
		
		createTags(words);
	
	});
	
	$('.js-tags').on('focusin', function () {
		var tagsArr = [];
		
		$('.sidebar__tag-text').first().each(function (e) {
			tagsArr.push( $(this).text() );
		});
		
		$('.js-tags').val( tagsArr.join(', ') );
		
	});
	
	$('body').on('click', '.sidebar__tag-del', function (e) {
		e.preventDefault();
		
		var dataid = $(this).attr('data-id');
		
		$('[data-id='+dataid+']').parents('.sidebar__tag').remove();
	});
	
	function createTags(words) {
		words.forEach(function (item, i, arr) {
			var newItem = item.replace(/\s/g, '');
			
			createTagsEl(newItem, i);
		})
	}
	
	function createTagsEl(tag, i) {
		
		if (tag.length > 1 ) {
			var $tag = $(' <span  class="sidebar__tag">' +
				'<span class="sidebar__tag-text">' + tag +'</span>' +
				'<a href="#" class="sidebar__tag-del" data-id="'+ i +'">x</a>' +
				'</span>');
			
			$tag.appendTo( $('.sidebar__tags-list') );
		}
		
		
	}
	
	
	// autocomplete
	
	var events = [
		{
			label: "Купание в звуках Гонга с Алицией и Ричардом Эйлякас",
			date: "c 8.10.17 по 9.10.17",
			addr: " Москва, ул. Сретенка, 11",
			//icon: "assets/images/"
		},
		{
			label: "2 Купание в звуках Гонга с Алицией и Ричардом Эйлякас",
			date: "c 8.10.17 по 9.10.17",
			addr: " Москва, ул. Сретенка, 11",
			//icon: "assets/images/"
		},
		{
			label: "3 Купание в звуках Гонга с Алицией и Ричардом Эйлякас",
			date: "c 8.10.17 по 9.10.17",
			addr: " Москва, ул. Сретенка, 11",
			//icon: "assets/images/"
		},
		{
			label: "4 Купание в звуках Гонга с Алицией и Ричардом Эйлякас",
			date: "c 8.10.17 по 9.10.17",
			addr: " Москва, ул. Сретенка, 11",
			//icon: "assets/images/"
		},
	];
	
	$( "#events-search" ).autocomplete({
		minLength: 0,
		source: events,
		// focus: function( event, ui ) {
		// 	//$( "#events-search" ).val( ui.item.value );
		// 	return false;
		// },
		// select: function( event, ui ) {
		// 	//$( "#events-search" ).val( ui.item.value );
		//
		// 	return false;
		// }
	})
		.autocomplete( "instance" )._renderItem = function( ul, item ) {
		return $( "<li>" )
			.append( "<div class='events__aut'>"
				+ "<div class='events__list-item-ava'>" +
				"<span class='events__list-item-ava-icon'></span>" +
				"</div>" +
				"<div class='events__list-item-info'>" +
				"<h3>"+ item.label  +"</h3>" +
				"<p>"+ item.date +"</p>" +
				"<span>"+ item.addr +"</span>" +
				"</div>"
				+"</div>" )
			.appendTo( ul );
	};
});