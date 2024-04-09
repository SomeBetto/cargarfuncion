function dialog_boot(myModal)
{
    var divModal=myModal;

    this.espera=function(sTitulo)
	{
        $("#myModal").modal();
		divModal.innerHTML="";
		if(sTitulo == 'undefined') sTitulo = '';
		var sHtml = 
        '<div class="modal-dialog"> ' +
            '<div class="modal-content"> ' +
                '<div class="modal-header"> ' +
                    '<h3 class="modal-title center"><b>' + sTitulo + '</b></h3> ' +
                '</div> ' +
                '<div class="modal-body"> ' +
                    '<div class="progress progress-striped active"> ' +
                        '<div class="progress-bar progress-bar-blue" style="width: 100%"></div> ' +
                    '</div> ' +
                ' </div> ' +
            '</div>' +
        '</div>';
		divModal.innerHTML=sHtml;
	};

    this.mensaje=function(sTitulo,sMensaje)
	{
        $("#myModal").modal();
		divModal.innerHTML="";
		if(sTitulo == 'undefined') sTitulo = '';
		var sHtml = 
        '<div class="modal-dialog"> ' +
            '<div class="modal-content"> ' +
                '<div class="modal-header"> ' +
                    '<button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">×</button> ' +
                    '<h3 class="modal-title center"><b>' + sTitulo + '</b></h3> ' +
                '</div> ' +
                '<div class="modal-body center"><h4><b> ' + sMensaje + ' </h4></b></div> ' +
                '<div class="modal-footer"> ' +
                    '<button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button> ' +
                '</div> ' +
            '</div>' +
        '</div>';
		divModal.innerHTML=sHtml;
	};
	
	this.mensajeTabla=function(sTitulo,sMensaje)
	{
        $("#myModal").modal();
		divModal.innerHTML="";
		if(sTitulo == 'undefined') sTitulo = '';
		var sHtml = 
        '<div class="modal-dialog"> ' +
            '<div class="modal-content"> ' +
                '<div class="modal-header"> ' +
                    '<button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">×</button> ' +
                    '<h3 class="modal-title center"><b>' + sTitulo + '</b></h3> ' +
                '</div> ' +
                '<div class="modal-body center"><h4><b> ' + sMensaje + ' </h4></b></div> ' +
                '<div class="modal-footer"> ' +
                    '<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="limpiarpagina()" >Aceptar</button> ' +
                '</div> ' +
            '</div>' +
        '</div>';
		divModal.innerHTML=sHtml;
	};
	this.mensajecerrar=function(sTitulo,sMensaje)
	{
        $("#myModal").modal();
		divModal.innerHTML="";
		if(sTitulo == 'undefined') sTitulo = '';
		var sHtml = 
        '<div class="modal-dialog"> ' +
            '<div class="modal-content"> ' +
                '<div class="modal-header"> ' +
                    '<button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">×</button> ' +
                    '<h3 class="modal-title center"><b>' + sTitulo + '</b></h3> ' +
                '</div> ' +
                '<div class="modal-body center"><h4><b> ' + sMensaje + ' </h4></b></div> ' +
                '<div class="modal-footer"> ' +
					'<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="closeNavegador()" >Aceptar</button> ' +
                    '<button type="button" class="btn btn-primary" data-dismiss="modal"  >Cancelar</button> ' +
                '</div> ' +
            '</div>' +
        '</div>';
		divModal.innerHTML=sHtml;
	};
}

function closeNavegador()
{
	//firefox
	if(navigator.appName.indexOf('Netscape') >= 0 )
	{
		//NAVEGADOR FIREFOX
		javascript:window.close();
	}
	else 
	{
		if(navigator.appName.indexOf('Microsoft') >= 0)
		{//internet explorer
			var ventana = window.self;
			ventana.opener = window.self;
			ventana.close();
		}
	}
}

function limpiarpagina()
{
	location.reload(true);
}