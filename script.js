function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var captcha = grecaptcha.getResponse();
  
    if (name == "") {
      showError("Please enter your name");
      return false;
    }
  
    if (email == "") {
      showError("Please enter your email address");
      return false;
    } else if (!validateEmail(email)) {
      showError("Please enter a valid email address");
      return false;
    }
  
    if (message == "") {
      showError("Please enter your message");
      return false;
    }
  
    if (captcha == "") {
      showError("Please complete the reCAPTCHA");
      return false;
    }
  
    return true;
  }
  