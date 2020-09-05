

function mostrar(nombre){
    if(nombre == "nacimiento")
    {
        document.getElementById("qsomos-nacimiento").style.display="block";
        document.getElementById("qsomos-mision").style.display="none";
        document.getElementById("qsomos-vision").style.display="none";
        document.getElementById("qsomos-equipo").style.display="none";
        document.getElementById("qsomos-compromiso").style.display="none";
        document.getElementById("qsomos-nacimiento").focus();
        document.getElementById("a-nacimiento").classList.add ("btn-activo");
        document.getElementById("a-mision").classList.remove ("btn-activo");
        document.getElementById("a-vision").classList.remove ("btn-activo");
        document.getElementById("a-equipo").classList.remove ("btn-activo");
        document.getElementById("a-compromiso").classList.remove ("btn-activo");
    }
    else if(nombre == "mision")
    {
        document.getElementById("qsomos-nacimiento").style.display="none";
        document.getElementById("qsomos-mision").style.display="block";
        document.getElementById("qsomos-vision").style.display="none";
        document.getElementById("qsomos-equipo").style.display="none";
        document.getElementById("qsomos-compromiso").style.display="none";
        document.getElementById("qsomos-mision").focus();
        document.getElementById("a-nacimiento").classList.remove ("btn-activo");
        document.getElementById("a-mision").classList.add ("btn-activo");
        document.getElementById("a-vision").classList.remove ("btn-activo");
        document.getElementById("a-equipo").classList.remove ("btn-activo");
        document.getElementById("a-compromiso").classList.remove ("btn-activo");
    }
    else if(nombre == "vision")
    {
        document.getElementById("qsomos-nacimiento").style.display="none";
        document.getElementById("qsomos-mision").style.display="none";
        document.getElementById("qsomos-vision").style.display="block";
        document.getElementById("qsomos-equipo").style.display="none";
        document.getElementById("qsomos-compromiso").style.display="none";
        document.getElementById("qsomos-vision").focus();
        document.getElementById("a-nacimiento").classList.remove ("btn-activo");
        document.getElementById("a-mision").classList.remove ("btn-activo");
        document.getElementById("a-vision").classList.add ("btn-activo");
        document.getElementById("a-equipo").classList.remove ("btn-activo");
        document.getElementById("a-compromiso").classList.remove ("btn-activo");
    }
    else if(nombre == "equipo")
    {
        document.getElementById("qsomos-nacimiento").style.display="none";
        document.getElementById("qsomos-mision").style.display="none";
        document.getElementById("qsomos-vision").style.display="none";
        document.getElementById("qsomos-equipo").style.display="block";
        document.getElementById("qsomos-compromiso").style.display="none";
        document.getElementById("qsomos-equipo").focus();
        document.getElementById("a-nacimiento").classList.remove ("btn-activo");
        document.getElementById("a-mision").classList.remove ("btn-activo");
        document.getElementById("a-vision").classList.remove ("btn-activo");
        document.getElementById("a-equipo").classList.add ("btn-activo");
        document.getElementById("a-compromiso").classList.remove ("btn-activo");
    }
    else if(nombre == "compromiso")
    {
        document.getElementById("qsomos-nacimiento").style.display="none";
        document.getElementById("qsomos-mision").style.display="none";
        document.getElementById("qsomos-vision").style.display="none";
        document.getElementById("qsomos-equipo").style.display="none";
        document.getElementById("qsomos-compromiso").style.display="block";
        document.getElementById("qsomos-compromiso").focus();
        document.getElementById("a-nacimiento").classList.remove ("btn-activo");
        document.getElementById("a-mision").classList.remove ("btn-activo");
        document.getElementById("a-vision").classList.remove ("btn-activo");
        document.getElementById("a-equipo").classList.remove ("btn-activo");
        document.getElementById("a-compromiso").classList.add ("btn-activo");
    }
}
