$(document).ready(function () {
	
	$("#neForm").validate({
		rules:{
			name: {
				required: true,
				minlength: 3,
				maxlength: 15
			},
			lastname: {
				required: true,
				minlength: 2,
				maxlength: 25
			},
			emailAdress:{
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			},
			confPassword:{
				required: true,
				equalTo: "#password"
			}	
		},
		messages:{
			name: {
				required: "The name is required.",
				minlength: "The minimum length of the name is 3 characters long.",
				maxlength: "The maximum length of the name is 15 characters long."
			},
			lastname: {
				required: "The last name is required.",
				minlength: "The minimum length of the name is 2 characters long.",
				maxlength: "The minimum length of the name is 25 characters long."
			},
			emailAdress:{
				required: "An e-mail adress is required.",
				email: "You have to insert a valid e-mail adress."
			},
			password: {
				required: "The password is required.",
				minlength: "The minimum length of the name is 5 characters long."
			},
			confPassword:{
				required: "The password must be confirmed.",
				equalTo: "The passwords are diferent."
			}	
		},
		
		submitHandler: function(form) {
            form.submit();
        }
	});
	
	$("#btnSave").click(function(){
            $("#neForm").submit();
            return false;
        });
	
});