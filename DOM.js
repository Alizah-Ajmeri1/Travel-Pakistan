//signup validation
function validation(){
    let name = document.getElementById("username").value;
    let email  = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailregex = /\w+@[a-z]+\.[a-z]{2,4}[\.[a-z]+]?/
    let passregex = /.{8,}/

    if(name == "" || email == "" || password == "" ){
            //Username error
        if(name == ""){
            document.getElementById("usererror").innerText ="Must Enter your username";
        }
        else{
            document.getElementById("usererror").innerText = "";
        }
             //email error
        if(email == ""){
            document.getElementById("emailerror").innerText = "Must Enter your email address";
        }
        else{
            if(emailregex.test(email)){
                document.getElementById("emailerror").innerText = "";
            }
            else{
                document.getElementById("emailerror").innerText = "Please Enter your valid email address";
            }
        }
              //password error
        if(password == ""){
            document.getElementById("passworderror").innerText = "Must Enter your password";
        }
        else{
            if(passregex.test(password)){
                document.getElementById("passworderror").innerText = "";
            }
            else{
                document.getElementById("passworderror").innerText = "Password must be 8 or more characters";
            }
        }
    }
    else{
        location.href = "index.html";
    }
}

//login validation
function validate(){
    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let emailregex = /\w+@[a-z]+\.[a-z]{2,4}[\.[a-z]+]?/
    let passregex = /.{8,}/

    if(name == "" || password == "" || !passregex.test(password)){
            //Username error
        if(name == ""){
            document.getElementById("nameerror").innerText ="Must Enter your username";
        }
        else{
            document.getElementById("nameerror").innerText = "";
        }
            //Password error
    
        if(password == ""){
            document.getElementById("passerror").innerText = "Must Enter your password";
        }
        else{
            if(passregex.test(password)){
                document.getElementById("passerror").innerText = "";
            }
            else{
                document.getElementById("passerror").innerText = "Password must be 8 or more characters";
            }
        }
    }
    else{
        location.href = "index.html";
    }
}
