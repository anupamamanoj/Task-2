function clickMe()
        {
            document.getElementById("test").innerHTML="Second";
        }
        
        function clickMe2()
        {
            document.getElementById("test2").innerHTML='<h5 id="change">H5 Tag</h5>';
        }

        function showMessage(input, message, type) 
        {
            const msg = input.parentNode.querySelector("Small");
	        msg.innerText = message;
	        input.className = type ? "success" : "error";
        	return type;
        }

        function showError(input, message) 
        {
            return showMessage(input, message, false);
        }

        function showSuccess(input) 
        {
            return showMessage(input, "", true);
        }
        
        function hasValue(input, message) 
        {
            if (input.value.trim() === "") 
            {
                return showError(input, message);
         	}
	        return showSuccess(input);
        }
        
        function validateEmail(input, requiredMsg, invalidMsg) 
        {
            if (!hasValue(input, requiredMsg)) 
            {
                return false;
       	    }
            const emailRegex =
		    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const email = input.value.trim();
 	        if (!emailRegex.test(email)) 
            {
                return showError(input, invalidMsg);
	        }
	        return true;
        }

        const form = document.querySelector("#signup");

        const NAME_REQUIRED = "Please enter your name";
        const EMAIL_REQUIRED = "Please enter your email";
        const EMAIL_INVALID = "Please enter a correct email address format";

        function sConsole(event) 
        {
            event.preventDefault();
            var data = document.getElementById("name");
            console.log(data.value);
        }

        document.querySelector('#signup').addEventListener('submit', function (event) 
        {
          event.preventDefault()
          const data = this.querySelector('input[name="quantity"]').value;
          if (data === '7')
          {
            console.log("Team Members :")
            console.log("Anupama Manoj")
            console.log("Prashant Pandey (Inactive)")
            console.log("Saloni Sanjay Deshmukh (Inactive)")
            console.log("Himanshu Muley (Inactive)")
          }
        })

        form.addEventListener("submit", function (event) 
        {
            event.preventDefault();
            let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
            let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
            if (nameValid && emailValid) 
            {
                alert("Demo only. No form was posted.");
            }
        });

        document.write("Value of Numbers <br/> 12 and 10 : <br/>");
        document.write("<br/>");
        var numOne=12, numTwo=10, res;
        res = numOne + numTwo;
        document.write("Add = " + res + "<br/>");
        res = numOne - numTwo;
        document.write("Subtract = " + res + "<br/>");
        res = numOne * numTwo;
        document.write("Multiply = " + res + "<br/>");
        res = numOne/numTwo;
        document.write("Divide = " + res + "<br/>");

        let element = document.querySelector("txt");
        txt.addEventListener("mouseenter", function( event ) 
        {   
            event.target.style.backgroundColor = "cornflowerblue";
        }, false);
        txt.addEventListener("mouseleave", function( event ) 
        {   
            event.target.style.backgroundColor = "";
        }, false);
