$(document).ready(function(){
    let nombrearchivo = '';

    $("#btnCargar").click(function(){
        cargarArchivo("#subir");
    });

    function validarconexion(){
        $.ajax({
            url: 'php/case.php',
            type: "GET",
            dataType: "json",
                success: function (data) {
                    alert(data.message);
                },
                error: function (data) {
                    alert(data.message);
                    bandera = false;
                }
        })
    }
    function cargarArchivo(input) {
        bandera = false;
        var form_data = new FormData();
        form_data.append("file", $(input)[0].files[0]);
    
        //Peticion AJAX
        $.ajax({
            cache: false,
            contentType: false,
            data: form_data,
            async: false,
            dataType: 'html',
            enctype: 'multipart/form-data',
            processData: false,
            method: "POST",
            url: "php/archivos.php",
            success: function (data) {
                bandera = true;
                let sTitulo = ' Archivo Cargado Correctamente';
                let sMensaje = '';
                dialogModalAceptar(sTitulo, sMensaje, 'verde');
            },
            error: function (data) {
                bandera = false;
            }
        });
        return bandera;
    }
    let modal = document.getElementById('myModal');
    
    function dialogModalAceptar(sTitulo, sMensaje, sColor = '')
    {
       var sHead = "";
       var sBody = "";
       var sFooter = "";

       sHead = '<div class="modal-header ' + sColor + '"> <h4 class="modal-title">' + sTitulo + '</h4> </div> ';
       sBody = '<div class="modal-body"> ' + sMensaje + ' </div> ';
       sFooter = '<div class="modal-footer"><button type="button" id="btnModal" class="btn btn-primary btn-sm" data-dismiss="modal">Aceptar</button> </div> ' ;
    
       dialogModal(sHead,sBody,sFooter);

       var bntAceptarModal = document.getElementById("btnModal");
    
       bntAceptarModal.onclick = function()
       {
           modal.style.display = "none";
           location.reload();
           $('#subir').val('');
       }		
    } 
    function dialogModal(sHead,sBody,sFooter)
    {
       var divModal=modal;
           divModal.innerHTML="";
           if(sHead == 'undefined') sHead = '';
           if(sBody == 'undefined') sBody = '';
           if(sFooter == 'undefined') sFooter = '';
           var sHtml = 
           '<div class="modal-dialog modal-md text-center"> ' + '<div class="modal-content"> ' + sHead + sBody + sFooter +'</div>' +'</div>';
           divModal.innerHTML=sHtml;
           modal.style.display = "block";
           eventosModales();
    } //Termina dialogModal(sHead,sBody,sFooter)
    
    function eventosModales()
    {
       window.onclick = function(event) 
       {
           if (event.target == modal) 
           {
             modal.style.display = "block";
           }
       }
    }
    
});

