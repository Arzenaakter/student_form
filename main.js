const form=
 document.getElementById('form');
const fname=
 document.getElementById('fname');
const lname= 
document.getElementById('lname');
const email= 
document.getElementById('email');
const tel= 
document.getElementById('tel');
const password= 
document.getElementById('password');
const password2=
document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();