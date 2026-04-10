document.getElementById("login-button")
    .addEventListener('click',function(){
        //get the number
        const number=document.getElementById('login-number').value;
        // console.log(number);
        //get the password
        const pin=document.getElementById('login-password').value;
        // console.log(pin);
        // compare the number and pin
        if(number=='01234567890' && pin=='1234'){
            //login successful
            alert('Login successful!');
            // window.location.replace('home.html');
            window.location.assign('home.html');
        }else{
            //login failed
            alert('login failed!');
            return;
        }
    })