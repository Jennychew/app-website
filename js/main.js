var $items = $('.items img');

var switchItem = function (current, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function(){
		$items.eq(current).hide().attr('data-state', '')
		$items.eq(incoming).attr('data-state', 'current')	
	
	});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function (){
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;
	
	if (next > $items.length - 1) {
	next = 0;
	}
	
	switchItem(current, next);
});

$items.filter(':not([data-state="current"])').hide();

$('.previous').on('click', function (){
	var current = $items.filter('[data-state="current"]').index();
	var next = current - 1;
	
	if (next > $items.length + 1) {
	next = 0;
	}
	
	switchItem(current, next);
});




//video

var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function (eventObject) {
	eventObject.preventDefault();
	$videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/85066534?color=fff" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	$videoDialog.get(0).showModal();
	
});

$('.btn-close').on('click', function (){
	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');
});


//play button

var $dipper = $('.dipper');

$('.dipper-section').waypoint(function (){
	$dipper.addClass ('js-dipper-animate');
}, {offset:'60%'});

