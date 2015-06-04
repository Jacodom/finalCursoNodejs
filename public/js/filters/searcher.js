$(document).ready(function(){

	$("#searcher").keyup(function(e){
		var params = {search: $(this).val()};
		if(params.search==""){
			$("#results").empty();
			return;
		}
		$("#results").empty();
		$.get('/employees/search',params,function(data){
			data.forEach(function(emp){
				$("#results").append(formatSearchElement(emp));
				});
			});
	});

	var formatSearchElement = function(element){
		var formatedElement = 
			'<div class="col-lg-4 col-md-4 col-xs-12">'+
				'<div class="thumbnail">'+
					'<img src="'+element.img+'"/>'+
					'<div class="row text-center">'+
						'<div class="col-lg-12 col-md-12 col-xs-12">'+
							'<h3>'+element.name+' '+element.lastname+'</h3>'+
							'<h4>'+element.emailAdress+'</h4>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
		return formatedElement;
	}
});