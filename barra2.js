const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const CPF = document.getElementById("CPF/CNPJ");
const fone = document.getElementById("fone");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");

document.addEventListener('click', (e) => {
    const isDropdownBtn = e.target.classList.contains('dropdown')

    if (!isDropdownBtn && e.target.closest('.navbar_item') != null) return;

    let currentSubmenu

    if(isDropdownBtn) {
    const item = e.target.closest('.navbar_item')

    currentSubmenu = item.querySelector('.submenu')

    currentSubmenu.classList.toggle('show')
    }
    document.querySelectorAll('.submenu.show').forEach(submenu => {
        if(submenu == currentSubmenu) return

        submenu.classList.remove('show');
    });
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputUsername();
    checkInputEmail();
    checkInputFone();
    checkInputCPF();
    checkInputpassword();
    checkInputpasswordConfirmation();

})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Campo obrigatório")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Campo obrigatório")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputFone(){
    const foneValue = fone.value;

    if(foneValue === ""){
        errorInput(fone, "Campo obrigatório")
    }else{
        const formItem = fone.parentElement;
        formItem.className = "form-content"
    }
}
function checkInputCPF(){
    const CPFValue = CPF.value;

    if(CPFValue === ""){
        errorInput(CPF, "Campo obrigatório")
    }else{
        const formItem = CPF.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputpassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Campo obrigatório")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}
function checkInputpasswordConfirmation(){
    const passwordConfirmationValue = passwordConfirmation.value;

    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "Campo obrigatório")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("spam")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}