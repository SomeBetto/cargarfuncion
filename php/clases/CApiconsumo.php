<?php
class CApiconsumo {

   function consumirApi($sFuncion, $arrDatos) {
      $url = 'http://localhost:5000/api/v1/'.$sFuncion;
      $ch = curl_init($url);
      curl_setopt($ch, CURLOPT_TIMEOUT, 30);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, $arrDatos);
      $result = curl_exec($ch);
      curl_close($ch);
      return $result;
   }
}
?>