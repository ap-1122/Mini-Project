let formvalid=()=>{
    let Name=document.querySelector("#name").value.trim();
    let Phone=document.querySelector("#phoneno").value.trim();
    let Email=document.querySelector("#email").value.trim();
    let Address=document.querySelector("#address").value.trim();
    let Pincode=document.querySelector("#pincode").value.trim();
    let State=document.querySelector("#state").value.trim();
    let PW=document.querySelector("#pass").value.trim();
    let  Cfpw =document.querySelector("#cfpw").value.trim();

    let errorname=document.querySelector("#errorname")
    let errorphone=document.querySelector("#errorphone")
    let erroremail=document.querySelector("#erroremail")
    let erroraddress=document.querySelector("#erroraddress")
    let errorpin=document.querySelector("#errorpincode")
    let errorstate=document.querySelector("#errorstate")
    let errorpw=document.querySelector("#errorpass")
    let cfpwpara=document.querySelector("#errorcfpw")
        


    if(Name==""){
        errorname.innerHTML="Please fill your name"
        document.querySelector("#name").style.border="3px solid red"
        return false;
    }
   else if(Phone.length!=10){
        errorphone.innerHTML="Please enter your Phone No"
        return false;
   }
    else if(!(Email.includes('@') && Email.includes('.com')) ){
        erroremail.innerHTML="Please enter Correct Email "
        return false;
   }
   else if(Address==""){
        erroraddress.innerHTML="Please enter address No"
        return false;
   }
   else if(Pincode.length!=6  || isNaN(Pincode) ){
        errorpin.innerHTML="Please enter your correct pincode No"
        return false;
   }
   else if(State==""){
        errorstate.innerHTML="Please enter your State Name"
        return false;
   }

       else if(!(PW.match(/[!@#$%^&*]/) &&
              PW.match(/[1234567890]/)   &&
              PW.match(/[A-Z]/)   && 
              PW.match(/[a-z]/)   )){

        errorpw.innerHTML="Enter Strong Password"
        return false;
   }
    else if(Cfpw!=PW){

        cfpwpara.innerHTML="Password not match"
       
        document.querySelector("#cfpw").value="";
        document.querySelector("#cfpw").focus();
         return false;
   }

   else{
   alert("form submitted")
   
  }


}