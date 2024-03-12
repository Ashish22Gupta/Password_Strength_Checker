        function check(){
            // g - is used for selecting the element likr /[1-4]/g means selecting the elements from 
            // 1 to 4 (like in 1,2,3....9 the output become 1,2,3,4).
            if(val.value.match(/[a-z]/g)){
                document.getElementById('small').style.color='green';
            }
            else{
                document.getElementById('small').style.color='red';
            }

            if(val.value.match(/[A-Z]/g)){
                document.getElementById('capital').style.color='green';
            }
            else{
                document.getElementById('capital').style.color='red';
            }

            if(val.value.match(/[0-9]/g)){
                document.getElementById('number').style.color='green';
            }
            else{
                document.getElementById('number').style.color='red';
            }

            if(val.value.match(/[@ _ . !]/)){
                document.getElementById('symbols').style.color='green';
            }
            else{
                document.getElementById('symbols').style.color='red';
            }
        }

        function sub(){
            if(document.getElementById('symbols').style.color=='green' &&
               document.getElementById('number').style.color=='green' &&
               document.getElementById('capital').style.color=='green' &&
               document.getElementById('small').style.color=='green'
            ){  
              document.getElementById("comm").innerHTML="Your Password is Submitted";
            }else{
                document.getElementById("comm").innerHTML="Your Password is Not Submitted&nbsp;!";
            }
        }