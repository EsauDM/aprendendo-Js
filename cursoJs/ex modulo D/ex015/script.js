function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = "fototarde.png24"
        document.body.style.background = '#f0c289'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = "fotomanhã.png24"
        document.body.style.background = '#fa8205'
    }else{
        //boa noite
        img.src = "fotonoite.png24"
        document.body.style.background = '#536a90'
    }
}

