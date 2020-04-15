$("p").on('click', function(event){
	//Create a new element
	var newEl = '<a href="http://www.msn.com"> Other News </a>';

	//Append new element
	//$('#someOtherElement').append(newEl);

	//Add an attribute
	$('#someOtherElement').append(newEl)/*.attr({'href' : "http://www.msn.com"})*/

})

