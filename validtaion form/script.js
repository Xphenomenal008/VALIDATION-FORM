let inputEror=document.getElementById("inputerror")
let  numbererror=document.getElementById("numbererror")
let emailerror=document.getElementById("emailerror")
let chractererror=document.getElementById("chractererror")
let btn=document.getElementById("btn")
let bton=document.getElementById("bton")
 let validate=()=>{
     
    let inputfield=document.getElementById("inputfield")
    if(inputfield.value.length==""){
        inputEror.innerHTML="Name cannot be empty"
        return false;
} if(!inputfield.value.match( /^[a-zA-Z\s]+$/)){
    inputEror.innerHTML="please write  full name"
    return false;
}
inputEror.innerHTML='<i class="fa-solid fa-check"></i>'
return true;
 }

let validateN=()=>{
    let numberRegex = /^\d+(\.\d+)?$/;
let numberfield=document.getElementById("numberfield").value
if(numberfield.length==0){
    numbererror.innerHTML="Number field can not be zero";
    return false;
}if(!numberfield.match(numberRegex)){
    numbererror.innerHTML="number should not be more than 10 digit"
    return false;
}if(!numberfield.match(numberRegex)){
numbererror.innerHTML="phone number is requerred"
return false
}
numberfield.innerHTML='<i class="fa-solid fa-check"></i>'
return true
}
     let validateE=()=>{

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emfield= document.getElementById("emailid").value
        if(emfield.length==0){
            emailerror.innerHTML="Email Field Can Not Be Empty"
            return  false
        }if(!emfield.match(emailRegex)){
            emailerror.innerHTML="Please Enter Valid Email ID "
            return  false
        }
        emailerror.innerHTML='<i class="fa-solid fa-check"></i>'
        return true
     }

let validateC=()=>{
    let cfield = document.getElementById("chracterfield")
    let requerred=30;
    let left=requerred-cfield.value.length
    if(left > 0){
        chractererror.innerHTML=`Character Left ${left}`
     return  false
    }
chractererror.innerHTML='<i class="fa-solid fa-check"></i>'
 return true
}
 
 
    
       function button(){
        if (!validate() || !validateN() || !validateE() || !validateC()) {
            bton.innerHTML="invalid error"
            bton.style.display="block"
            setTimeout(()=>{
                bton.style.display="none"
            },3000)
            return false;
        }
      }