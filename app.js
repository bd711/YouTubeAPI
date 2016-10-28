
$(document).ready(function() {
	$('form').submit(function(event){
		event.preventDefault();
		var userInput = $(".js-query").val();
		console.log(userInput);
		$(".results").empty();

	$.ajax({

		url: "https://www.googleapis.com/youtube/v3/search",
		data: {
			part: "snippet",
			key: "AIzaSyClsVB34QuUD4UaY0arRCgbwp3sGLAxFyI",
			q: userInput
		},
		dataType: "json",
		method: "GET",
		success: function(data) {
			console.log(data);
			$.each(data.items,function(index, item){
				$(".results").append("<p><img src='"+item.snippet.thumbnails.medium.url+"'></p>");
			});
		}
	});
	

});

});

