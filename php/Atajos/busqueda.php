<?php

include "conexion.php";
$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $busqueda = $request->busqueda;
    //$busqueda = "colegio";

    $sql = "SELECT * FROM telefonos WHERE nombre_telefono LIKE '%$busqueda%'";
    //echo($sql);

    $nombres = mysql_query($sql);
   
    $array_nombres = array(); 
    
    $i = 0;
    while ($nombres_array = mysql_fetch_array($nombres))
    {
        $sql_numeros = "SELECT numero_numero FROM numeros WHERE lugar_numero='$nombres_array[0]'";
        $numero = mysql_query($sql_numeros);
        $array_numero = mysql_fetch_array($numero);
    
        $array_telefono_php[$i][0] = $nombres_array[2]; //Nombre
        $array_telefono_php[$i][1] = $nombres_array[3]; //Direccion
        $array_telefono_php[$i][2] = $array_numero[0]; //Telefono
        $array_telefono_php[$i][3] = $nombres_array[5]; //Pagina Web
        $array_telefono_php[$i][4] = $nombres_array[6]; //Categoria
        //$array_telefono_php[$i][3] = $nombres_array[6]; //Imagen
        $i++;
        //echo($nombres_array[2]);
    }
    $array_telefono_php['lenght'] = count($array_telefono_php);
    echo json_encode($array_telefono_php);


?>