function onload(pag){
    if(pag == "index")
    {
        document.getElementById("index-activo").classList.add ("btn-activo");
    }
    else if(pag== "qsomos")
    {
        document.getElementById("a-nacimiento").classList.add ("btn-activo");
        document.getElementById("qs-activo").classList.add ("btn-activo");
    }
    else if(pag == "servicios")
    {
        document.getElementById("serv-activo").classList.add ("btn-activo");
    }
    else if(pag == "porfolio")
    {
        document.getElementById("porf-activo").classList.add ("btn-activo");
    }
    else if(pag == "contacto")
    {

    }
    
}