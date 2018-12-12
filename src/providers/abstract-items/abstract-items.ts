import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {CallNumber} from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AbstractItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AbstractItemsProvider {

  Localidad_id:number;      //Id de la localidad
  Localidad_Nombre:string;  //Nombre de la localidad
  Tipo_localidad:number;    //Tipo de la localidad seleccionada
  Categoria_id:number;      //Categoria seleccionada
  items: any;               //Array con detalles del contacto
  ip_carpeta = 'https://www.phcristopher.xyz/Atajos/';  //Servidor Externo
  //ip_carpeta = 'http://localhost/Atajos/';            //Servidor Local

  Llamar(numero){
    const confirm = this.AlertController.create({
      title: '¿Llamar?',
      //message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            //console.log('cancelado');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Llamar');
            this.CallNumber.callNumber(numero,true)
            .then(res => console.log("Funco",res))
            .catch(err => console.log("No Funco",err))
          }
        }
      ]
    });
    confirm.present();
  }

  constructor(public http: HttpClient, private CallNumber:CallNumber , public AlertController: AlertController) {

  }

  /*
  probar_conexion(){
    var prueba_conexion =  this.ip_carpeta + "conexion.php";
    this.http.get(prueba_conexion)
    .subscribe((data : any) =>
      {
        console.log(prueba_conexion);
        console.log("Encontro IP");

      },
      (error : any) =>
      {
        console.log(prueba_conexion);
        console.log("No encontro");
        //this.ip_carpeta = prompt("No se encontro el servidor", "http://192.168.0.36/Atajos/");
        this.probar_conexion();
        // "http://xxx.xxx.x.xxx/pruebas/Ionic/prueba.php"
      });
  }
  */
}
