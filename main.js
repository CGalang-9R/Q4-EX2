function verifyAge(){
	var inputAge = document.getElementById('age').value;

	if(inputAge<18){
		window.alert('Not eligible to vote');
	}

	else{
		window.alert('Eligible to vote');
	}
}

