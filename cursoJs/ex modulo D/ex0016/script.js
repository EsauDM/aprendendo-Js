function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.lenght = 0 || fAno.value > ano){
        alert('[ERRO], Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value) 
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criançam.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultom.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosoh.png')
            }
        }else if(fsex[1].checked){
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criançaf.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemf.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultof.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosaf.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
    
}