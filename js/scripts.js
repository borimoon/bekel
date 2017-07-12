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
