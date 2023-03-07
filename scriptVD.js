function fn_login()
       {
            var userName = document.getElementById("username");
            var password = document.getElementById("pass");
           var _name=document.getElementById("username1")
           var _pass=document.getElementById("pass1")
           
           if(userName.value=='')
           {
               _name.style.display='block'
                userName.focus()
           }
           else{
               _name.style.display='none'
           }
            if(!password.value)
           {
                _pass.style.display='block'
               password.focus()
           } 
           else{
                _pass.style.display='none'
           }
            if(userName.value && password.value)
            {
               alert("Đăng nhập thành công")
            }
       }