function check(){
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

    if(val.value.length >= 8){
        document.getElementById('digits').style.color='green';
    }
    else{
        document.getElementById('digits').style.color='red';
    }
}

function sub(){
    if(document.getElementById('symbols').style.color=='green' &&
       document.getElementById('number').style.color=='green' &&
       document.getElementById('capital').style.color=='green' &&
       document.getElementById('small').style.color=='green' &&
       document.getElementById('digits').style.color=='green'
    ){  
      document.getElementById("comm").style.color='green';
      document.getElementById("comm").innerHTML="Your Password is Submitted";
      document.getElementById('Conditions').innerText="";
      document.getElementById("number").innerText =""; 
      document.getElementById("small").innerText = "";
      document.getElementById("capital").innerText = "";
      document.getElementById("symbols").innerText = "";
      document.getElementById('digits').innerText="";
    }else{
        document.getElementById("comm").innerHTML="Your Password is Not Submitted&nbsp;!";
        document.getElementById("comm").style.color='red'
        document.getElementById('Conditions').innerText="Conditions/Rules:";
      document.getElementById("number").innerText ="(1)Enter The Number."; 
      document.getElementById("small").innerText = "(2)Enter The Small Alphabet.";
      document.getElementById("capital").innerText = "(3)Enter The Capital Alphabet.";
      document.getElementById("symbols").innerText = "(4)Enter The Symbols.";
      document.getElementById('digits').innerText="(5)Enter atleast 8 digits.";
    }
}
