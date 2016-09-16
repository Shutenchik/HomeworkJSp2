$(function () {
	$('a').on('click', function (e) {
		e.preventDefault();
	});

	var $dropItem = $('.dropdown');
	var $subMenu = $('.submenu');
		$dropItem.hover(
			function(){
				$(this).children('.submenu')
				.animate({height: '130px', backgroundColor: 'rgb(255, 80, 90)'}, 200)
				.show();
			},
			function () {
				$(this).children('.submenu')
				.animate({height: '0', backgroundColor: 'rgba(225,75,125,0.75)'}, 200)
				.hide(0);
			});
	
})