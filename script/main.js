'use restrict';

const formulario = document.getElementById('form');
formulario.addEventListener("submit",eventoFormulario,);
const valor = 400000;

function eventoFormulario(e){
    
    const cantidad = document.getElementById('cantidad').value;
    const total = cantidad*valor;
    const respuesta = document.getElementById('print');
    const op = document.getElementById('color').value;
    e.preventDefault();

    if(op ==='azul'){
        respuesta.innerHTML=`<h1>Total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            margin: 0px;
            padding: 20px;
            width: 30px;
            height: 35px;
            background-color: blue;
            border-radius:50%;
            text-align: left;
            
        }
        </style>
        <div></div>
        `;  
    } else if (op==='verde'){
        respuesta.innerHTML=`<h1>Total:$ ${total} </h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            margin: 0px;
            padding: 20px;
            width: 25px;
            height: 25px;
            background-color: green;
            border-radius:50%;
            text-align: left;
        }
        </style>
        <div></div>
        `;   
        
    } else if (op==='amarillo'){
        respuesta.innerHTML=`<h1>Total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            margin: 0px;
            padding: 20px;
            width: 25px;
            height: 25px;
            background-color: yellow;
            border-radius:50%;
            text-align: left;
        }
        </style>
        <div></div>
        `;
      
    }else if(op==='fucsia'  ){
        respuesta.innerHTML=`<h1>Total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            margin: 0px;
            padding: 20px;
            width: 25px;
            height: 25px;
            background-color: fuchsia;
            border-radius:50%;
            text-align: left;
        }
        </style>
        <div></div>
      
        `; 
    }
  
}

