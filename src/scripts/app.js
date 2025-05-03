document.addEventListener("DOMContentLoaded", function(){
    const container = document.getElementById("qrcode")

        const urlDestino = window.location.origin + window.location.pathname.replace("index.html", "")+ "uai-fiProz2.0.html"

        new QRCode(container, {
            text: urlDestino, 
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
})

const formulario = document.getElementById("loginForm")

formulario.addEventListener('submit', async function(e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    if (email !== "" && senha !== "") {
        alert("Atenção: verifique se você está em um ambiente seguro antes de inserir suas informações pessoais.");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
