function convertir(){
    let cant = Number(document.getElementById("cantidad").value);

    let opcion = document.querySelector("#operacion").value;

    // proceso
                let conversion;
    switch(opcion){

        case "ep": 
            conversion = cant * 4659.59;
            conversion = conversion.toFixed(2);
            document.getElementById("resultado").innerHTML = "Tu cantidad en Pesos es: $ "+conversion;
            break;

            case "pe":
                conversion = cant / 4659.59;
                conversion = conversion.toFixed(2);
                document.getElementById("resultado").innerHTML ="Tu cantidad en Euros es: E "+conversion;
                break;
    }

    
}