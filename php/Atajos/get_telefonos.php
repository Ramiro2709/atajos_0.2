<?php

    include "conexion.php";

    ////// ++++++ Para recibir el POST del ts
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $Localidad = $request->localidad;
    $Categoria = $request->categoria;
    $tipo_localidad = $request->tipo_localidad;

    if ($tipo_localidad <= 2)
    {
        $sql_detalles = "SELECT * FROM telefonos WHERE id_localidad = '$Localidad' AND id_categoria='$Categoria' ";
    } else{
        $sql_detalles = "SELECT * FROM telefonos WHERE id_localidad = '$Localidad'";
    }
    $telefono = mysql_query($sql_detalles);
   
    

    $array_telefono_php = array(); 
    $i = 0;
    while ( $telefono_array = mysql_fetch_array($telefono))
    {
        $sql_numeros = "SELECT numero_numero FROM numeros WHERE lugar_numero = '$telefono_array[0]'";
        $numero = mysql_query($sql_numeros);
        $array_numero = mysql_fetch_array($numero);

        $array_telefono_php[$i][0] = $telefono_array[2]; //Nombre
        $array_telefono_php[$i][1] = $telefono_array[3]; //Direccion
        //$array_telefono_php[$i][2] = $telefono_array[4]; //Telefono
        $array_telefono_php[$i][2] = $array_numero[0]; //Telefono
        $array_telefono_php[$i][3] = $telefono_array[5]; //Pagina Web
        $array_telefono_php[$i][4] =  $telefono_array[6]; //Categoria
        //$array_telefono_php[$i][3] = $telefono_array[6]; //Imagen


        $i++;
        //echo($telefono_array[2]);
    }
    $array_telefono_php['lenght'] = count($array_telefono_php);
    echo json_encode($array_telefono_php);
?>