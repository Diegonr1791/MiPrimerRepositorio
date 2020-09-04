
var intentos = 4;
var palabra;
var acerto = false;


function mostrarTabla(){
    nombre = prompt("Ingrese el Nombre");
   
    if(nombre =="")
    {
        alert("Por favor ingrese un nombre para jugar");
    }
    else
    {
        if (nombre === null)
        {

        }
        else
        {
            alert("Bienvenido " + nombre +", a jugar!!!");
            cargarTabla(nombre,intentos);
            document.getElementById('tabla-juego').style.display="block";
            document.getElementById("texto-jugar").style.display="none";
            document.getElementById("btn-empezar").style.display ="none";
        }
    }
}

function cargarTabla(nombre,intentos){
 
    document.getElementById("nom-jugador").innerHTML = nombre;
    document.getElementById("cant-intentos").innerHTML = intentos;
    document.getElementById("cant-intentos").classList.add("text-success");
}

function ocultarTabla(){
    document.getElementById('tabla-juego').style.display="none";
    document.getElementById("btn-empezar").style.display ="block";
    reset();
}

function jugar(){
    palabra_oculta= "DEVELOPER";
    pista1 = "Palabra que se utiliza para describir a la persona que desarrolla."
    pista2 = "La palabra es en Ingles y comienza con D."

    
    palabra = String(document.getElementById("palabra").value);
    palabra = palabra.toUpperCase();
    

    if (palabra != "")
    {
        intentos --;

        if (palabra == palabra_oculta)
        {
            
            document.getElementById("gano-perdio").innerHTML= "ENHORABUENA, HAS ACERTADO!!!";
            document.getElementById("cant-intentos").innerHTML= intentos;
            document.getElementById("gano-perdio").classList.remove("bg-danger");
            document.getElementById("gano-perdio").classList.add("bg-success");
            document.getElementById("btn-jugar").disabled ="true";
            document.getElementById("palabra").disabled ="true";
            

        }
        else
        {
            document.getElementById("cant-intentos").innerHTML= intentos;
            document.getElementById("gano-perdio").innerHTML= "Fallaste";
            document.getElementById("gano-perdio").classList.add("bg-danger");
            document.getElementById("palabra").focus();

            if (intentos == 3 )
            {
                document.getElementById("cant-intentos").classList.add("text-warning"); 
            }
            else if (intentos == 2)
            {
                document.getElementById("pista1").innerHTML = pista1
                document.getElementById("pista1").classList.add("bg-info");
                document.getElementById("cant-intentos").classList.add("text-warning");
                
            }
            else if(intentos == 1 )
            {
                document.getElementById("pista2").innerHTML = pista2
                document.getElementById("pista2").classList.add("bg-info");
                document.getElementById("cant-intentos").classList.add("text-danger");
            }
            else if(intentos == 0 )
            {
                document.getElementById("gano-perdio").innerHTML = "PERDISTE, La palabra era " + palabra_oculta;
                document.getElementById("btn-jugar").disabled ="true";
                document.getElementById("palabra").disabled ="true";
            }
            else
            {
                document.getElementById("cant-intentos").classList.add("text-success");
            }
            
        }


       
    }
    else
    {
         alert("Ingrese la palabra");
    }    
}

function reset(){
    location.reload();
    document.getElementById("btn-empezar").focus();

}