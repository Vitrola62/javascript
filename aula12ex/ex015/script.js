function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.jpg')                
            } else {
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}