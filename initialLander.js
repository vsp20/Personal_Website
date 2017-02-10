var myAdjectives = ['Developer.', 'Entrepreneur.', 'Idealist.','Engineer.']


$(document).ready(function(){
	var counter = 0;
	var $rotate = $('#rotate');

	var rotate = function() { //This function is to rotate to the next adjective in the myAdjectives array
		counter++;
		var currentAdj = myAdjectives[counter % myAdjectives.length];
		//Set the inner html of the id rotate to the specified adjective.
		$rotate.fadeTo(1000,0.0)
		setTimeout(function(){
			$rotate.html(currentAdj)},1000);
		setTimeout(function(){$rotate.fadeTo(1000,1)}	,2000);

	}
	setInterval(rotate,4000);
	var $win = $(window);

    $('div.background').each(function(){
        var scroll_speed =5;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });	


});