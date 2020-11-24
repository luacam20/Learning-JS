function carregar() {           
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = 'Sem-Título-1.png'
        document.body.style.background = '#6a7282'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde 
        img.src = 'tarde.png'
        document.body.style.background = '#5b5b62'
    } else {
        //Boa noite
        img.src = 'Sem-Título-2.png'
        document.body.style.background = '#5b83db'
    }

}