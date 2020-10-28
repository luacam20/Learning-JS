function Analyser() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {   
        window.alert('[ERRO]] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                 // criança
                 img.setAttribute('src', 'bebemenino.png')
            } else if ( idade < 21) {
                // Joven
                img.setAttribute('src', 'homemjoven.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // idoso 
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebemenina.png')
           } else if ( idade < 21) {
               // Joven
               img.setAttribute('src', 'mulherjoven.png')
           } else if (idade < 50) {
               // adulto
               img.setAttribute('src', 'mulheradulta.png')
           } else {
               // idoso 
               img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}