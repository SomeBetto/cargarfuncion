<?php
include_once('clases/Ccargaarchivo.php');


$arrayResp    = array();
$iOpcion      = filter_input(INPUT_POST, 'iOpcion', FILTER_SANITIZE_STRING);
$iOpcion      = empty($iOpcion) ? '0' : $iOpcion;

$iNombreArchivo      = filter_input(INPUT_POST, 'iNombreArchivo', FILTER_SANITIZE_STRING);
$iNombreArchivo      = empty($iNombreArchivo) ? '0' : $iNombreArchivo;


switch($iOpcion){
    case 0:
        $arrayResp=Ccargaarchivo::validarApi();
        break;
    case 1:
        $arrayResp=Ccargaarchivo::ejecutarapi($iNombreArchivo);
        break;
    case 2:

        break;
}

echo json_encode($arrayResp);