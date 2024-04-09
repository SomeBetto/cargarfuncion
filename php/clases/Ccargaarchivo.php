<?php 
include_once("CApiconsumo.php");
define('EXCEPTION', "Excepcion: Ocurrió una Excepcion al Consultar la Api");
class Ccargaarchivo{
    public static function ejecutarapi($nombrearchivo){
        $objapi = new CApiconsumo();
        $arrdata =array(
            'nombrefuncion'=>$nombrearchivo
        );
        try{
            $resultApi=$objapi->consumirApi('documentarfunciondesdearchivo',$arrdata);
            $resultApi = json_decode($resultApi);
            if($resultApi){
                $arrDatosResp['respuesta']   = 1;
                $arrDatosResp['estatus']     = $resultApi->estado;
                $arrDatosResp['nombrepdf'] = $resultApi->nombrepdf;
                $arrDatosResp['resultado']       = $resultApi->resultado;
             } else{
                $arrDatosResp['respuesta']   = -1;
                $arrDatosResp['datos']       = null;
                $arrDatosResp['resultado'] = 'ERROR AL ENTRAR A LA API';
                $arrRespuesta['codigoRespuesta'] = -1;
             }

        }
        catch (Exception $e){
            $arrDatosResp['respuesta'] = 0;
			$arrDatosResp['resultado'] = EXCEPTION;
			$arrDatosResp['datos'] = null;
        }
        return $arrDatosResp;
    }
    public static function validarApi(){
        $objapi = new CApiconsumo();
        try{
            $resultApi=$objapi->consumirApi('about','');
            $resultApi = json_decode($resultApi);
            if($resultApi){
                $arrDatosResp['respuesta']   = 1;
                $arrDatosResp['message']       = $resultApi->message;
             } else{
                $arrDatosResp['respuesta']   = -1;
                $arrDatosResp['message']       = "No hay conexion con api";
             }

        }
        catch (Exception $e){
            $arrDatosResp['respuesta'] = 0;
			$arrDatosResp['message'] = EXCEPTION;
        }
        return $arrDatosResp;
    }
}