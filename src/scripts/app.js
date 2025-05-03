document.addEventListener("DOMContentLoaded", function(){
    const container = document.getElementById("qrcode")

        const urlDestino = window.location.origin + window.location.pathname.replace("index.html", "")+ "uai-fiProz2.0.html"

        new QRCode(container, {
            text: urlDestino, 
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
})