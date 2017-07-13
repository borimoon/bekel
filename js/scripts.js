// mobile menu show-hide
$(function() {
	var menuVisible = false;
	$('#toggle').click(function() {
		if (menuVisible) {
			$('#menu').css({'display':'none'});
			menuVisible = false;
			return;
		}
		$('#menu').css({'display':'block'});
		menuVisible = true;
	});
	$('#menu').click(function() {
		$(this).css({'display':'none'});
		menuVisible = false;
	});
});

// stop youtube video
$(function(){
	$('.close').click(function(){
		$('iframe').attr('src', $('iframe').attr('src'));
	});
});
