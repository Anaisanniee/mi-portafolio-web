function escribir(valor)
{
    document.getElementById("txtpantalla").value+=valor;
}


function Calcular()
{
  let resultado= document.getElementById("txtpantalla").value;
  try{
    resultado=eval(resultado);
    document.getElementById("txtpantalla").value=resultado;
  } 
    catch(error){ 
        document.getElementById("txtpantalla").value="Error";              
    }
}

function masmenos(){
    let valor=document.getElementById("txtpantalla").value;
     if(valor.charAt(0)=="-"){
        document.getElementById("txtpantalla").value=valor.substring(1);
     }
     else{
        document.getElementById("txtpantalla").value="-"+valor;
     }
}

function porcentaje(){
    let valor=document.getElementById("txtpantalla");
    if(valor.value !== ""){
        pantalla.value=eval(pantalla.value/100);
    }
}

function borrar(){
    document.getElementById("txtpantalla").value=""
}