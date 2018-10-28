/*
	Name: Jordan Theisen
	Date Created: 10/26/2018
	Most Recent Version: 
*/

function validateInfo() {
	
	var name = document.forms["form1"]["name"].value;
	var email = document.forms["form1"]["email"].value;
	var phone = document.forms["form1"]["phone"].value;
	var inquiry = document.forms["form1"]["inquiry"].value;
	var additionalInfo = document.forms["form1"]["info"].value;
	var beenTo = document.forms["form1"]["questionnaire"].value;
	var contactDays = document.getElementsByName("days");
	var carString = "";

	//The if statement makes sure that the name, email, and phone number field are provided.
	if(name != "" && email != "" && phone!="") {
		for ( var i = 0; i<contactDays.length; i++) {
			if(contactDays[i].checked) {
				carString += contactDays[i].value + ", ";
			}
		}

	 
	    if (name == "" || isNaN(name)===false ) {
	        alert("Name must not have any numbers.");
	        document.forms["bettingForm"]["name"].parentElement.className = "form-group has-error";
	        document.forms["bettingForm"]["name"].focus();
	        return false;
	    }


		alert("The information provided is valid." + "\n" +
		"\n" +
		"Name: " + name +  "\n" + 
		"Email: " + email + "\n" +
		"Phone: " + phone + "\n" +
		"Reason for Inquiry: " + inquiry + "\n" +
		"Additional Info: " + additionalInfo + "\n" +
		"Been to the Restaurant: " + beenTo + "\n" +
		"Best Days to Contact You: " + carString + "\n"
		 );
		}

	else  alert("Please make sure that you enter a name, email, and valid phone number. Thank you!");
}

