// ***  VALIDATING FORM   ***
function validateTextbox(){
    var label=document.getElementsByTagName("label");
    var name=document.getElementById("name");
    var address=document.getElementById("address");
    var phone=document.getElementById("phone");
    var email=document.getElementById("email");
    var count=0;

    if(name.value!=""){
        label[0].style.color="black";
        label[0].style.fontWeight="200";
        name.style.border="";
    }
    if(address.value!=""){
        label[1].style.color="black";
        label[1].style.fontWeight="200";
        address.style.border="";
    }
    if(phone.value!=""){
        label[2].style.color="black";
        label[2].style.fontWeight="200";
        phone.style.border="";
    }
    if(email.value!=""){
        label[3].style.color="black";
        label[3].style.fontWeight="200";
        email.style.border="";
    }


    if(name.value=="" || name.value==null){
        label[0].style.color="red";
        label[0].style.fontWeight="900";
        name.focus();
        name.style.border="solid 3px red";
        alert("The field marked in red cannot be blank");
        return false;
    }else if(address.value=="" || address.value==null){
        label[1].style.color="red";
        label[1].style.fontWeight="900";
        address.focus();
        address.style.border="solid 3px red";
        alert("The field marked in red cannot be blank");
        return false;
    }else if(phone.value=="" || phone.value==null){
        label[2].style.color="red";
        label[2].style.fontWeight="900";
        phone.focus();
        phone.style.border="solid 3px red";
        alert("The field marked in red cannot be blank");
        return false;
    }else if(email.value=="" || email.value==null){
        label[3].style.color="red";
        label[3].style.fontWeight="900";
        email.focus();
        email.style.border="solid 3px red";
        alert("The field marked in red cannot be blank");
        return false;
    }
}
