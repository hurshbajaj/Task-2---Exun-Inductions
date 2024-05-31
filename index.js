let submitBtn = document.getElementById("submit_btn");
let name_input = document.getElementById("input1");
let mail_input = document.getElementById("input2");
let extra_input = document.getElementById("input3");


submitBtn.onclick = function(){
    if(name_input.value == ""){
        name_input.placeholder = "Name*";
    }
    if(!mail_input.value.includes("@")){
        mail_input.value = "";
        mail_input.placeholder = "Email*";
    }
    if(extra_input.value == ""){
        extra_input.placeholder = "Anything else you'd like to add?*";
    }
    if(name_input.value != "" && mail_input.value.includes("@") && extra_input.value != ""){
        submitBtn.href = "index3.html";
    }
    
}
