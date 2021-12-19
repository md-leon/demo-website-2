let formJS = document.querySelectorAll("#formJS");
let formSub = document.getElementById("formSub");
let formId = document.getElementById("formId");


formId.addEventListener("submit",(e)=>{
    e.preventDefault();
    formSub.addEventListener("click",()=>{
    if(formJS.value != " "){
        alert("Thanks for this message.")
    }
    })
})
