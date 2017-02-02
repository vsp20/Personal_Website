
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
	$resumeInfo = $('#resumeInfo');
	$aboutInfo = $('#aboutInfo');
	$projectInfo = $('#projectInfo');
	$contactInfo = $('#contactInfo');

	var currentTab = function(string){
		if (document.getElementById(string).id == 'resume'){
			
			$border.css('margin-left','0%');
			$border.css('left','7px');
			$resumeInfo.attr('highlighted','true');
			$aboutInfo.attr('highlighted','false');
			$projectInfo.attr('highlighted','false');
			$contactInfo.attr('highlighted','false');

		}
		if (document.getElementById(string).id == 'about'){

			$border.css('margin-left','25%');
			$border.css('left','3px');
			$resumeInfo.attr('highlighted','false');
			$aboutInfo.attr('highlighted','true');
			$projectInfo.attr('highlighted','false');
			$contactInfo.attr('highlighted','false');

		}
		if (document.getElementById(string).id == 'projects'){

			$border.css('margin-left','50%');
			$border.css('left','-1px');
			$resumeInfo.attr('highlighted','false');
			$aboutInfo.attr('highlighted','false');
			$projectInfo.attr('highlighted','true');
			$contactInfo.attr('highlighted','false');
		}

		if (document.getElementById(string).id == 'contact'){

			$border.css('margin-left','75%');
			$border.css('left','-5px');
			$resumeInfo.attr('highlighted','false');
			$aboutInfo.attr('highlighted','false');
			$projectInfo.attr('highlighted','false');
			$contactInfo.attr('highlighted','true');
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
