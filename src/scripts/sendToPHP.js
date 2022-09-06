//Script para enviar los datos a php y mostrar alerta


import { Alert } from 'react-native'

const SUCCESS = 1

const uploadData = (data) => {
    console.log("DATOS ENVIADOS");
    console.log(data.time);
    console.log(data.date);
    console.log(data.longitude);
    console.log(data.latitude);
    console.log(data.repType);
    console.log(data.description);
    console.log(data.img.length);
    console.log(data.codigo);

    let myData = "hora=" + data.time + "&dia=" + data.date + "&lat=" + data.latitude +
                "&lon=" + data.longitude + "&denuncia=" + data.repType +
                "&descripcion=" + data.description + "&data=" + data.img +
                "&codigo=" + data.codigo;
    
    console.log(myData);

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let response = request.response;
            console.log(response);
        }
        else {
            console.log("ERROR");
            console.log(this.readyState);
            console.log(this.status);
        }
    };

    request.open('POST', 'http://148.202.152.33/loginMapaD/datosCucei.php', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(myData);
}

const fuploadData = (data)=>{
    console.log("My data")
    //console.log(data)

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //let res = JSON.parse(xhttp.response)
            console.log(xhttp.response)
            /*if (res == SUCCESS) {//Conexion exitosa
                //callback(res)
                console.log("Exito: " + res)
            } else {//Error en la conexion :(
                console.log("ERROR :(")
            }*/
        }
        else{
            console.log("en else")
            console.log(this.readyState)
            console.log(this.status)
        }
    }
    

    let s = "hora="+data.time+"&dia="+data.date+"&latitud="+data.latitude+"&longitud="+data.longitude+"&denuncia="+data.repType+"&descripcion="+data.description+"&imagenEnco="+data.img

    xhttp.open('POST', 'https://apprentice-swab.000webhostapp.com/borrar.php', true)
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(s)
}

export { uploadData }