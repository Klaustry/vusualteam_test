$(document).ready(function(){
	$('.slider ul').bxSlider({
		pager: true,
		controls: true,
		mode: 'fade',
		minSlides: 1,
		maxSlides: 1
	});
});

  //accordion
  $(document).ready(function() {
    $('.block__title').click(function(event) {
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

});