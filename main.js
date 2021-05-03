var response_form = document.getElementById('response-form');
var openModal = document.getElementById("open-modal");
var span = document.getElementsByClassName("close")[0];
openModal.onclick = function() {
	response_form.style.display = "block";
}
span.onclick = function() {
	response_form.style.display = "none";
}

window.onload = function() {
	response_form.addEventListener('submit', function(event) {
		event.preventDefault();
        emailjs.sendForm('service_rxx4kdc', 'response-form', '#response-form', "user_BZQUP7Cepb0tnErGl5qD8")
            .then(function() {
            	response_form.style.display = "none";
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}