function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >=0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'midias/bebe-masculino.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'midias/criança-masculino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'midias/jovem-masculino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'midias/adulto-masculino.png')
            } else {
                //idoso
                img.setAttribute('src', 'midias/idoso-masculino.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'midias/bebe-feminino.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'midias/criança-feminino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'midias/jovem-feminino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'midias/adulto-feminino.png')
            } else {
                //idoso
                img.setAttribute('src', 'midias/idoso-feminino.png')
            }
        }
        res.innerHTML = `Detectamos: gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}