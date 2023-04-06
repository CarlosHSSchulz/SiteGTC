

function verSenha(){
    
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    } else {
    inputSenha.setAttribute('type', 'password')
    }         
}
function verConfirmSenha(){
    
    let inputSenha = document.querySelector('#confirmSenha')

    if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
    } else {
    inputSenha.setAttribute('type', 'password')
    }         
}
