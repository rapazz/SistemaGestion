$( document ).ready(function() {

	$('#formCrearIncidente').validate({

					rules: {
						asunto:  "required",
						 
					},
					messages: {
						asunto: "ingrese un e"
					 
					}

	});
});