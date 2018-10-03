// Check Off specific todos by clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new todos through input element
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grab todo text form input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Toogle plus icon to open input field
$(".fa-plus").click(function() {
		$("input[type='text']").fadeToggle();
});
