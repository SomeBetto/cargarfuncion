<?php
    header("strict-transport-security: max-age=31536000; includeSubDomains; preload");

    $data = array('success'=> false,
                    'msj'=>'');

    try {

        $directorioArchivo = "/sysx/progs/web/menuoficinasafore/paginas/cargarpagina/temp/";
        $directorioTmp = "/tmp/";

        if (!file_exists($directorioArchivo)) 
        {            
            mkdir($directorioArchivo, 0777, true);
        }
        $RouteFile = $directorioArchivo.basename($_FILES['file']['name']);
        $RouteFileTmp = $directorioTmp.basename($_FILES['file']['tmp_name']);

        $RouteFile = filter_var($RouteFile, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
        $RouteFileTmp = filter_var($RouteFileTmp, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);

        if (is_readable($RouteFileTmp)){
            if (copy($RouteFileTmp, $RouteFile)) {
                $data["success"] = true;
                $data["msj"] = "Archivo subido correctamente.";
            }
            else{
                $data["msj"] = "Fallo el copy.";
            }
        }
        else {
            $data["msj"] = "Archivo existe o no es legible.";
        }        
        
    } catch (Exception $e) {
        $data["success"] = false;
        $data["msj"] = "Se detecto una Exception.";
    }

    echo json_encode($data);
?>
