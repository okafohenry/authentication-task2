
		let signUpBtn = document.getElementById("sign-up-btn");
		let firstName = document.getElementById("first-name").value;
		let lastName = document.getElementById("last-name").value;
		let email = document.getElementById("email").value;
		let password = document.getElementById("password").value;
		let confPassword = document.getElementById("conf-password").value;
		let checkbox = document.getElementById('checkbox');
		if((firstName || lastName  || email || password || confPassword ) === "" ){
			signUpBtn.disabled = true;
			signUpBtn.style.backgroundColor = "#f2f2f2";
			signUpBtn.style.cursor = "not-allowed";
		}else if((firstName && lastName  && email && password && confPassword ) !== "" ){
			signUpBtn.disabled = false;
			signUpBtn.style.backgroundColor = "#D3AF41";
			signUpBtn.style.cursor = "pointer";
		}


		function handleClick(){ 
			//Name Verification
			let regEx = /[0-9]/;
			let firstName = document.getElementById('first-name').value;
			let lastName = document.getElementById('last-name').value;
			if(regEx.test(firstName) || regEx.test(lastName)){
				document.getElementById("name-error").style.display = "block";
			}else{
				document.getElementById("name-error").style.display = "none"
			}
		
			//Email validation
			let mailPattern = /^[a-zA-z]+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			let mail = document.getElementById("email").value;
			if(!mail.match(mailPattern)){
				document.getElementById("email-error").style.display = "block"
			}else{
				document.getElementById("email-error").style.display = "none"
			}
			//Length of password validation
			let password = document.getElementById("password").value;
			if(password.length < 8){
				document.getElementById("password-error").style.display = "block";
			}else{				
				document.getElementById("password-error").style.display = "none";
			}

			// confirm password validation
			if(document.getElementById("password").value !== document.getElementById("conf-password").value){
				document.getElementById("conf-password-error").style.display = "block";
			}
		}
			
