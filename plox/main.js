	$(document).ready(function(){

		$(".content").hide();

		$(".content").fadeIn(3000);

		//countdown
		$("#countdown").countdown("2015/09/01", function(results){
			$("#months").text(results.strftime("%m"));
			$("#days").text(results.strftime("%d"));
			$("#hours").text(results.strftime("%H"));
			$("#minutes").text(results.strftime("%M"));
			$("#seconds").text(results.strftime("%S"));
		});

		// add subscriber
		$("form").submit(function(){
			$("#signUp").hide();
			$("#signUp").html("<p>Thank you for subscribing</p>");
			$("#signUp").fadeIn(2000);
			
			return false;
		});

		//validate email
		$("#email").keyup(function(){
			var reg = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
			var value = $(this).val();
			if(value.match(reg)){
				$("#submit").attr("disabled", false);
			}else{
				$("#submit").attr("disabled", true);
			}	

		})
		
			
	});
