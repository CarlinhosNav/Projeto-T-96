// pegar o valor dos inputs (nome e mensagem)
// Validar se o nome não estiver vazio
//      Se o nome não estiver vazio
///         pegar os dois valores e montar uma frase
//          jogar a frase na url (link) pro WhatsApp
//          jogar a pessoa na url que criamos 
//      se o valor estiver vazio:
//          coloca uma borda vermelhe no input do nome
//          coloca o .focus() no input do nome

function enviarMensagem(){
    const inputNome = document.querySelector("#input_nome");
    const inputMensagem = document.querySelector("#input_mensagem");

    // se o valor não tiver vazio
    if(inputNome.value != ''){
        let frase = `Olá! me chamo ${inputNome.value}, ${inputMensagem.value}`

        // wpp seria abreviação de WhatsApp
        let urlwpp = `https://api.whatsapp.com/send?phone=5511968292943&text=${frase}`

        window.open(urlwpp)
    
    }
    // se o valor do nome estiver vazio
    else{
        inputNome.style.border = '2px solid #ff0000'
        inputNome.style.outline = 'none'
        inputNome.focus()
    }

}