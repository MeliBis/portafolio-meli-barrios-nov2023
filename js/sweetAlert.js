//const { default: Swal } = require("sweetalert2");
function showAlert(){
    let alerta= document.getElementsByClassName("showAlert")
    return
    Swal.fire({
        title:"Listo! se han enviado tus datos y te contactare pronto",
       // position: "top-end",
        icon: "success",
        //showConfirmButton: false,
        timer: 2800
    })

}