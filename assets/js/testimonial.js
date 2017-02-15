$(document).ready(function(){

	//click function targets tags on the testimonlial page
	$(document).on("click", ".down-arrow", function(){

		var state = $(this).attr("data-state");
		var testTag= $(this).parent();

		if(state == "inactive"){
			state = $(this).attr("data-state", "active");//changes state to active

			//slides the testimonial down
	        testTag.children(".testimonial-text").slideToggle(500);

	        //makes image full sized
	        testTag.children(".testImg")
	        .css("transition", "all 1.5s ease")
	        .css("-webkit-clip-path", "circle(109% at 50%)")
	     

		 } else if (state == "active"){
			state = $(this).attr("data-state", "inactive");//changes state to inactive

			//slides the testimonial down
	        testTag.children(".testimonial-text").slideToggle(500);

	        //returns image to circle
	        testTag.children(".testImg")
	        .css("-webkit-clip-path", "circle(30.0% at 50% 35%)")
	        .css("transition", "all 1.s ease");
		}
			
	});

});

