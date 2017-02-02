
 var myAdjectives = ['The Designer', 'The Developer', 'The Dreamer']


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


	$resume = $('#resume');
	$about = $('#about');
	$contact = $('#contact');
	$projects = $('#projects');
	$border = $('#borderBottom');
	var currentTab = function(string){
		if (document.getElementById(string).id == 'resume'){
			
			$border.css('left','6px');
		}
		if (document.getElementById(string).id == 'about'){

			$border.css('left','314px');

		}
		if (document.getElementById(string).id == 'contact'){

			$border.css('left','930px');
		}
		if (document.getElementById(string).id == 'projects'){

			$border.css('left','622px');
		}
	}
	$resume.on("click",function(){
		var string = 'resume';
		currentTab(string);
		

	});
	$about.on("click",function(){
		string = 'about';
		currentTab(string);
		

	});
	$contact.on("click",function(){
		string = 'contact';
		currentTab(string);

	});
	$projects.on("click",function(){
	string = 'projects';
	currentTab(string);

	});


	


	// var $button = $('#button')
	// $button.on("click", function(){
	// 	var newTitle = $('input[name=title]').val();
	// 	newTitle.html("");
	// 	$('#title').html(newTitle)
	// 	console.log("here");
	// });
 });
