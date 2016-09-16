$(function () {
	// part1
	$('.jcarousel').jcarousel({
		animation: 'slow',
    	wrap: 'circular'
	})
	.jcarouselAutoscroll({
		interval: 6000,
    	target: '+=1',
   	 	autostart: true
	});

	$('.jcarousel-pagination')
	.on('jcarouselpagination:active', 'a', function () {
		$(this).addClass('active');
	})
	.on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active');
	})
	.jcarouselPagination();



	$('.banners-acordeon__header').click(function() {
		if( !$(this).hasClass('active')) {
			$('.banners-acordeon__header').removeClass('active')
			.next('.banners-accordeon__info-block').slideUp(200);

			$(this).addClass('active');
			$(this).next('.banners-accordeon__info-block').slideDown(200);
		} else {
			$(this).removeClass('active').next('.banners-accordeon__info-block').slideUp();
		};
	});


	// part2


var sortedSkills = _.sortBy(_.uniq(_.flatten(_.map(userData, 'skills'))));
var sortedName = _.map(_.sortBy(userData, 'friends'), 'name');
var allFriends = _.sortBy(_.uniq(_.map(_.flatten(_.map(userData, 'friends')), 'name')));

console.log( 'Skills', sortedSkills);
console.log( 'Name' , sortedName);
console.log( 'Friends' ,allFriends);

});




  

