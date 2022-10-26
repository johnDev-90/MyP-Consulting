
const form =  document.querySelector("#form");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const phone = document.querySelector("#phoneNum");
const email = document.querySelector("#email");
const textArea = document.querySelector("#textarea");
const btn =  document.querySelector("#btnEnviar");
const btnMenu = document.querySelector("#hamburgerIcone");
const showMenu = document.querySelector(".nav-ul");



const firstNameError = document.querySelector("#nameerror");
const lastNameError = document.querySelector("#lastNameError");
const phoneError = document.querySelector("#phoneError");
const emailError = document.querySelector("#emailerror");
const textAreaError = document.querySelector("#textareaError");
const dialogo =  document.querySelector(".confirmationDialoge");

const mainBox = document.querySelector("#mainbox");





btnMenu.addEventListener(`click`, () => {
    showMenu.classList.toggle(`nav-ul--show`);
   
})

mainBox.addEventListener(`click`, () => {
    
    showMenu.classList.remove(`nav-ul--show`);
    
})





btn.addEventListener(`click`, (event) =>{

   
    
    formValidation(firstName.value,firstName,firstNameError,"Nombre"); 
    formValidation(lastName.value,lastName,lastNameError,"Apellido" );
    formValidation(phone.value,phone,phoneError,"Telefono");
    formValidation(textArea.value,textArea,textAreaError,"Mensaje"); 

    emailValidation(email.value,email,emailError,"Correo electronico");

   

  

    
});





function emailValidation(inputvalue, divInput, divError, valueName){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if(inputvalue.match(regExp)){
        validationPassed(inputvalue, divInput,divError,valueName);
    }else{
        emailFaild(inputvalue, divInput, divError,valueName);
    }

    if(inputvalue.length <= 0){
        validationFaild(inputvalue, divInput, divError,valueName);
        
    }
}

function emailFaild(inputvalue, divInput, divError,valueName){
    divInput.style.borderColor = "red";
    divError.textContent = `${valueName} No es valido`;
    
}

function formValidation(inputvalue, divInput, divError, valueName){
    if(inputvalue == ""){
        
        validationFaild(inputvalue, divInput, divError,valueName);
        

        
    }else{
        validationPassed(inputvalue, divInput,divError,valueName);
        
    }
}

function validationFaild(inputvalue,divInput,divError,valueName){
    
    divInput.style.borderColor = "red";
    divError.textContent = `${valueName} no puede estar vacio`;
    
    form.removeAttribute("action","https://formsubmit.co/informacion@mypconsulting.com");
    form.removeAttribute("method","post" );
    
    
    
  
     
}

function validationPassed(inputvalue, divInput, divError, valueName){
    divInput.style.borderColor = "green";
    divError.textContent = ` `;
    form.setAttribute("action", "https://formsubmit.co/informacion@mypconsulting.com");
    form.setAttribute("method","post" );

    dialogo.style.display = "flex";
    
   
}



















