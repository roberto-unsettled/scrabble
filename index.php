<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

   include('movilDetect.php');  // acuérdate de incluir la ruta correcta    

   $detect = new Mobile_Detect();

   function getUserLanguage() { 
      $idioma =substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2);
      return $idioma; 
   }
   
   $user_language = getUserLanguage();

   if( $user_language == 'es' ) {
      $user_language = 'es';
   }
   else {
      $user_language = 'en';
   }

   if ( !empty ( $_GET[ 'lang' ] ) ) {
      $user_language =        $_GET[ 'lang' ];      
   }

   if ($detect->isMobile()) {
      header( 'Location: movil_'. $user_language .'.html' );
   } 
   else {
      header( 'Location: index_'. $user_language .'.html' );
   }
?>
